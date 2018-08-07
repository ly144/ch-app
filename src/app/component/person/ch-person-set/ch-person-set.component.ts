import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { PersonService } from '../../../service/person.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-ch-person-set',
  templateUrl: './ch-person-set.component.html',
  styleUrls: ['./ch-person-set.component.css']
})
export class ChPersonSetComponent implements OnInit {

  userId = +localStorage.getItem('userId');
  person: Person;
  radioValue = '男';

  submitForm() {
    this.personService.setPerson(this.person)
      .subscribe((value: number) => {
        if (value > 0) {
          this.message.success('修改成功');
        } else {
          this.message.error('修改失败');
        }
      });
  }

  init() {
    this.personService.personInit(this.userId)
      .subscribe((value: Person) => {
        this.person = value;
        console.log(this.person);
      });
  }

  constructor(private personService: PersonService,
              private message: NzMessageService) { }

  ngOnInit() {
    this.init();
  }

}
