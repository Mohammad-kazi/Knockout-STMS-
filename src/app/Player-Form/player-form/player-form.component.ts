import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { player } from 'src/app/models/player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent {
  registerForm: FormGroup;

  @Input()
  model!: player;

  @Output()
  OnPlayerEvent: EventEmitter<player>;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 101)],
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ]),
      ],
      age: ['', Validators.compose([Validators.required, Validators.min(18)])],
      gender: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
    this.registerForm.get('gender')?.setValidators(this.validateGender);
    this.OnPlayerEvent = new EventEmitter<player>();
  }

  validateGender(gender) {
    if (gender.value === 'female') {
      return { noEventForWomen: true };
    }
    return null;
  }

  ngOnInit() {
    if (this.model !== undefined) {
      this.registerForm.patchValue(this.model);
    }
  }

  saveChanges() {
    this.OnPlayerEvent.emit(this.registerForm.value);
  }
}
