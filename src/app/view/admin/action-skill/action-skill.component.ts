import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillService } from 'src/app/service/skill.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-action-skill',
  templateUrl: './action-skill.component.html',
  styleUrls: ['./action-skill.component.css']
})
export class ActionSkillComponent implements OnInit {
  skillForm: FormGroup;
  id: any;
  skillDetail: any;
  constructor(
    private ActivRoute: ActivatedRoute,
    private router: Router,
    private ps: SkillService,
    private toastr: ToastrService
  ) {
    this.skillForm = new FormGroup({
      name_skill: new FormControl('', [Validators.required]),
      image: new FormControl('', Validators.required),
      point: new FormControl('', [Validators.required, Validators.max(100)]),
    });
  }

  ngOnInit(): void {
    this.id = this.ActivRoute.snapshot.params['id'];

    if(this.id){
      this.onGetList();
    }else {
      this.skillDetail = {
        name_skill: "",
        image: "",
        point: 0,
      };
      this.onGetList();
    }
  }

  onGetList(){
    this.ps.getSkill(this.id).subscribe(data => {
      this.skillDetail = data;
    })
  }

  OnUpdate(obj :any) {
    if(this.id){
      this.ps.updateSkill(this.id, obj).subscribe();
      this.router.navigate(['/admin/skill']);
      this.toastr.success("Cập nhật thành công")
  
    }else {
      this.ps.createSkill(obj).subscribe();
      this.router.navigate(['/admin/skill']);
      this.toastr.success("Thêm mới thành công")
  
    }
  }
}
