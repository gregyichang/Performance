// tslint:disable:max-line-length

import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { PolymerChanges } from '@codebakery/origami';

@Component({
    selector: 'app-student-entry',
    templateUrl: './studentEntry.component.html',
    styleUrls: ['./studentEntry.css']
})
export class StudentEntryComponent implements OnInit {
    public stateList: string[] = [];
    private student: Student;
    private isViewing: string;
    @PolymerChanges() @Input('stValue') stValue: Student;

    ngOnInit() {
        this.isViewing = 'No';

        this.stateList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
            'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
            'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }

    setCurrentStudent (isCurrent) {
        this.isViewing = isCurrent ? 'Yes' : 'No';
    }
}
