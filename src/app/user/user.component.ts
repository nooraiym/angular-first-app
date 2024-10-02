import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string

  // avatar = input<string>('initialValue') // или так
  avatar = input.required<string>() // или так
  name = input.required<string>()
  imagePath = computed(() => 'assets/users/' + this.avatar())

  // когда мы используем такой синтаксис то предотвращаем изменение значения внутри компонента и нельзя поменять его используя set

  // get imagePath () {
  //   return 'assets/users/' + this.avatar()
  // }

  onSelectUser () {
  }
}
