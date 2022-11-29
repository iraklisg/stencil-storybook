import {
  Component, Host, h, Prop,
} from '@stencil/core';

@Component({
  tag: 'my-tailwind-component',
  styleUrl: 'my-tailwind-component.css',
  // shadow: true,
})
export class MyTailwindComponent {
  @Prop() buttonText = 'Change plan';

  render() {
    return (
      <Host>
        <p>Hello</p>
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Manage subscription</h3>
            <div class="mt-2 sm:flex sm:items-start sm:justify-between">
              <div class="max-w-xl text-sm text-gray-500">
                <slot></slot>
              </div>
              <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">
                  {this.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
