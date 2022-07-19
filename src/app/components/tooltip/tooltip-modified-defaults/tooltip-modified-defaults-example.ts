import {Component} from '@angular/core';
// import {
//   MAT_TOOLTIP_DEFAULT_OPTIONS,
//   MatTooltipDefaultOptions,
// } from '@angular/material/legacy-tooltip';

/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

/**
 * @title Tooltip with a show and hide delay
 */
@Component({
  selector: 'tooltip-modified-defaults-example',
  templateUrl: 'tooltip-modified-defaults-example.html',
  providers: [{provide:10, useValue: myCustomTooltipDefaults}],
})
export class TooltipModifiedDefaultsExample {}
