import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { form1Component } from './form1.component';
import { form2Component } from './form2.component';


const appRoutes: Routes = [
    {
        path: 'form1',
        component: form1Component
    },
    {
        path: '',
        redirectTo: 'form1',
        pathMatch: 'full'
    },
    {
        path: 'form2',
        component: form2Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only   
                //preloadingStrategy: SelectivePreloadingStrategy,
                useHash: true

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //CanDeactivateGuard,
        //SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
