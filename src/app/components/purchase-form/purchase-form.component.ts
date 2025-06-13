import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-purchase-form',
    templateUrl: './purchase-form.component.html',
    styleUrl: './purchase-form.component.scss'
})
export class PurchaseFormComponent {

    @Output() formSubmitted = new EventEmitter<boolean>(false);
    formularioCompra!: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.formularioCompra = new FormGroup({
            name: new FormControl<string>('', [Validators.required]),
            surname: new FormControl<string>('', [Validators.required]),
            department: new FormControl<string>('', [Validators.required]),
            city: new FormControl<string>('', [Validators.required]),
            address: new FormControl<string>('', [Validators.required]),
            phone: new FormControl<string>('', [Validators.required, Validators.pattern(/^\d{10,15}$/)]),
            identificationNumber: new FormControl<string>('', [Validators.required, Validators.pattern(/^\d{7,10}$/)]),
        });
    }

    onSubmit(): void {
        if (this.formularioCompra.valid) {
            const purchaseData: PurchaseData = this.formularioCompra.getRawValue();
            this.formSubmitted.emit(true);
        } else {
            this.formularioCompra.markAllAsTouched();
        }
    }
}

export interface PurchaseData {
    name: string;
    surname: string;
    department: string;
    city: string;
    address: string;
    phone: string;
    identificationNumber: string;
}
