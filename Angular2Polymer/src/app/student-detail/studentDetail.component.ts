// tslint:disable:max-line-length
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Student } from '../models/student';
import { PolymerChanges } from '@codebakery/origami';

@Component({
    selector: 'app-student-detail',
    templateUrl: './studentDetail.component.html'
})

export class StudentDetailComponent implements OnInit {
    public stateList: string[] = [];
    @PolymerChanges() public student: Student;
    private _dialog: any;

    @ViewChild('button')
    set dialog(value: any) {
        this._dialog = value;
    }
    get dialog(): any {
        return this._dialog;
    }

    constructor() { }

    ngOnInit() {
        this.student = new Student();
        this.student.id = 1;
        this.student.name = 'Yavuz Tor';
        this.student.homeState = 'Alabama';
        this.student.age = 19;
        this.student.comment = 'Some comment here';

        this.stateList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
            'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
            'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }

    doSomethingAndHide() {
        this.dialog.nativeElement.hide();
    }

    openDialog() {
        this.dialog.nativeElement.open();
    }
}
