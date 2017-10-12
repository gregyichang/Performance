import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, HostBinding, OnInit, TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../models/student';

@Component({
    templateUrl: './form1.component.html',
    styles: [':host { position: relative; bottom: 10%; }']
})
export class Form1Component implements OnInit {
    students: Student[] = [];
    constructor() { }

    ngOnInit() {
        this.students = Student.students();
    }

    getStudent() {
        const viewId = Math.floor((Math.random() * 10) + 1);
        return this.students[viewId];
    }

}
