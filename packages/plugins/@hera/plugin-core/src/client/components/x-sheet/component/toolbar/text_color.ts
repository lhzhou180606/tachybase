import DropdownColor from '../dropdown_color';
import DropdownItem from './dropdown_item';

export default class TextColor extends DropdownItem {
  constructor(color) {
    super('color', undefined, color);
  }

  dropdown() {
    const { tag, value } = this;
    return new DropdownColor(tag, value);
  }
}
