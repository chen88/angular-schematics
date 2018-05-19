import { Directive } from '@angular/core'

@Directive({
  selector: '[<%= camelize(name) %>Dir]'
})
export class <%= classify(name) %>Directive {
  constructor () {}
}
