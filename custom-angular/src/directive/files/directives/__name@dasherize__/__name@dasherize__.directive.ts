import { Directive } from '@angular/core'

@Directive({
  selector: '[<%= name %>Dir]'
})
export class <%= classify(name) %>Directive {
  constructor () {}
}
