import { Component, Input, OnInit } from '@angular/core';
import {MDCSelect} from '@material/select';

import { Student } from './student';

@Component({
    selector: 'student-detail',
    templateUrl: './studentDetail.component.html'
})

export class studentDetailComponent implements OnInit{
    public stateList: string[] = [];
    @Input() public student: Student;


    ngOnInit() {
        this.student = new Student();
        this.stateList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
        'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
        'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }
    
    get stateSelected(){
        return this.stateList.find(x=> x==this.student.homeState)
    }

    showStudent(){
        this.student.homeState=this.student.homeState;
    }
    selectChanged(newState){
        console.log(newState);
    }
}