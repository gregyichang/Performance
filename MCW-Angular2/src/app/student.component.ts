import { Component, Input, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'student',
    templateUrl: './student.component.html',
    styleUrls: ['./app.component.css']
})
export class studentComponent implements OnInit{
    public stateList: string[] = [];
    private student: Student;
    public isViewing: string;

    @Input("stValue")
    set stValue(val: Student) {
        this.student = val;
    }
    get stValue(): Student {
        return this.student;
    }



    ngOnInit() {
        this.isViewing = "No";

        this.stateList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
            'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
            'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        
        
    }

    public setCurrentStudent (isCurrent) {
        this.isViewing = isCurrent ? "Yes" : "No";
    }

    onChange(newState) {
        console.log(newState);
    }
}
