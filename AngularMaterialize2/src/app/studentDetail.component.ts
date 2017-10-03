import { Component, Input, OnInit } from '@angular/core';

import { Student } from './student';

declare var $: any

@Component({
    selector: 'student-detail',
    templateUrl: './studentDetail.component.html'
})

export class studentDetailComponent implements OnInit{
    public stateList: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
        'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    private _student: Student;

    //constructor() { }

    ngOnInit() {
        this._student = new Student();
    }

    @Input("student")
    set student(val: Student) {
        this._student = val;
    }
    get student(): Student {
        return this._student;
    }


    closeDetail() {
        
        $('#studentDetail').modal("close");
    }
}