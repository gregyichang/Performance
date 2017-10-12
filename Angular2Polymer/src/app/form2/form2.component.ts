import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';

@Component({
    templateUrl: './form2.component.html',
    styles: [':host { position: relative; bottom: 10%; }']
})
export class Form2Component implements OnInit {
    students: Student[];

    constructor() {
        this.students = Student.students();
    }

    ngOnInit() { }
}
