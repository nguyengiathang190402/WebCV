import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillPageComponent implements OnInit {
  skill: any;
  constructor(
    private ps: SkillService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.ps.getSkills().subscribe(data => {
      this.skill = data;
    });
  }

  onDelete(id: number | string) {
    if(id) {
      window.confirm("Bạn có muốn xóa ?");
      this.ps.deleteSkill(id).subscribe(data => {
      this.onGetList();
      });
      this.toastr.success("Xóa thành công")
    }
  }

}