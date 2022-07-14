import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public form: FormGroup;
    public constructor(
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: ['我是标题'],
            students: this.fb.array([
                // this.fb.group({
                //     name: ['小明'],
                //     age: [18],
                //     cards: this.fb.array([
                //         this.fb.group({
                //             key: [],
                //             no: []
                //         })
                //     ])
                // })
            ])
        });
    }

    public ngOnInit(): void {
        this.form.valueChanges.subscribe(val => {
            console.log('form change:', val);
        });
    }

    public get studentControl(): FormArray {
        return this.form.controls['students'] as FormArray;
    }

    public addStudent(): void {
        const form = this.fb.group({
            name: [],
            age: [],
            cards: this.fb.array([])
        });
        this.studentControl.push(form);
    }

    public addCard(fg: FormGroup): void {
        const form = this.fb.group({
            key: [],
            no: []
        });
        const cardsControl: FormArray = fg.get('cards') as any;
        cardsControl.push(form);
    }

}
