import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';


const appRoutes: Routes = [
    {
        path: 'form1',
        component: Form1Component
    },
    {
        path: 'form2',
        component: Form2Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
                // preloadingStrategy: SelectivePreloadingStrategy,
                useHash: true

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // CanDeactivateGuard,
        // SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
