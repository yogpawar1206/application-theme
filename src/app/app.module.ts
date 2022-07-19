import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompletePlainInputComponent } from './components/autocomplete-plain-input/autocomplete-plain-input.component';
import { AutocompleteSimpleComponent } from './components/autocomplete-simple/autocomplete-simple.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BottomSheetOverviewExample } from './components/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview-example';
import { BottomSheetHarnessExample } from './components/bottom-sheet/bottom-sheet-harness/bottom-sheet-harness-example';
import { BadgeHarnessExample } from './components/badge/badge-harness/badge-harness-example';
import { BadgeOverviewExample } from './components/badge/badge-overview/badge-overview-example';
import { AutocompleteAutoActiveFirstOptionExample } from './components/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example';
import { AutocompleteDisplayExample } from './components/autocomplete-display/autocomplete-display-example';
import { AutocompleteFilterExample } from './components/autocomplete-filter/autocomplete-filter-example';
import { ButtonHarnessExample } from './components/button/button-harness/button-harness-example';
import { ButtonOverviewExample } from './components/button/button-overview/button-overview-example';
import {ButtonToggleHarnessExample} from './components/button-toggle/button-toggle-harness/button-toggle-harness-example';
import {ButtonToggleModeExample} from './components/button-toggle/button-toggle-mode/button-toggle-mode-example';
import {ButtonToggleOverviewExample} from './components/button-toggle/button-toggle-overview/button-toggle-overview-example'
import {ButtonToggleFormsExample} from './components/button-toggle/button-toggle-forms/button-toggle-forms-example'
import {ButtonToggleExclusiveExample} from './components/button-toggle/button-toggle-exclusive/button-toggle-exclusive-example'
import {ButtonToggleAppearanceExample} from './components/button-toggle/button-toggle-appearance/button-toggle-appearance-example'
import { AutocompleteHarnessExample } from './components/autocomplete-harness/autocomplete-harness-example';
import { AutocompleteOptgroupExample } from './components/autocomplete-optgroup/autocomplete-optgroup-example';
import { AutocompleteOverviewComponent } from './components/autocomplete-overview/autocomplete-overview.component';
import {CardActionsExample} from './components/card/card-actions/card-actions-example';
import {CardFancyExample} from './components/card/card-fancy/card-fancy-example';
import {CardFooterExample} from './components/card/card-footer/card-footer-example';
import {CardHarnessExample} from './components/card/card-harness/card-harness-example';
import {CardMediaSizeExample} from './components/card/card-media-size/card-media-size-example';
import {CardOverviewExample} from './components/card/card-overview/card-overview-example';
import {CardSubtitleExample} from './components/card/card-subtitle/card-subtitle-example';
import {CheckboxConfigurableExample} from './components/checkbox/checkbox-configurable/checkbox-configurable-example';
import {CheckboxHarnessExample} from './components/checkbox/checkbox-harness/checkbox-harness-example';
import {CheckboxOverviewExample} from './components/checkbox/checkbox-overview/checkbox-overview-example';
import {CheckboxReactiveFormsExample} from './components/checkbox/checkbox-reactive-forms/checkbox-reactive-forms-example';
import {ChipsAutocompleteExample} from './components/chips/chips-autocomplete/chips-autocomplete-example';
import {ChipsAvatarExample} from './components/chips/chips-avatar/chips-avatar-example';
import {ChipsDragDropExample} from './components/chips/chips-drag-drop/chips-drag-drop-example';
import {ChipsFormControlExample} from './components/chips/chips-form-control/chips-form-control-example';
// import {ChipsHarnessExample} from './components/chips/chips-harness/chips-harness-example';
import {ChipsInputExample} from './components/chips/chips-input/chips-input-example';
import {ChipsOverviewExample} from './components/chips/chips-overview/chips-overview-example';
import {ChipsStackedExample} from './components/chips/chips-stacked/chips-stacked-example'
import {ElevationOverviewExample} from './components/core/elevation-overview/elevation-overview-example';
import {RippleOverviewExample} from './components/core/ripple-overview/ripple-overview-example';

import {DateRangePickerComparisonExample} from './components/datepicker/date-range-picker-comparison/date-range-picker-comparison-example';
import {DateRangePickerFormsExample} from './components/datepicker/date-range-picker-forms/date-range-picker-forms-example';
import {DateRangePickerOverviewExample} from './components/datepicker/date-range-picker-overview/date-range-picker-overview-example';
import {DateRangePickerSelectionStrategyExample} from './components/datepicker/date-range-picker-selection-strategy/date-range-picker-selection-strategy-example';
import {DatepickerActionsExample} from './components/datepicker/datepicker-actions/datepicker-actions-example';
import {DatepickerApiExample} from './components/datepicker/datepicker-api/datepicker-api-example';
// import {DatepickerCustomHeaderExample} from './components/datepicker/datepicker-custom-header/datepicker-custom-header-example';
import {DatepickerCustomIconExample} from './components/datepicker/datepicker-custom-icon/datepicker-custom-icon-example';
import {DatepickerDateClassExample} from './components/datepicker/datepicker-date-class/datepicker-date-class-example';
import {DatepickerDisabledExample} from './components/datepicker/datepicker-disabled/datepicker-disabled-example';
import {DatepickerEventsExample} from './components/datepicker/datepicker-events/datepicker-events-example';
import {DatepickerFilterExample} from './components/datepicker/datepicker-filter/datepicker-filter-example';
import {DatepickerHarnessExample} from './components/datepicker/datepicker-harness/datepicker-harness-example';
// import {DatepickerFormatsExample} from './components/datepicker/datepicker-formats/datepicker-formats-example';
import {DatepickerInlineCalendarExample} from './components/datepicker/datepicker-inline-calendar/datepicker-inline-calendar-example';
// import {DatepickerLocaleExample} from './components/datepicker/datepicker-locale/datepicker-locale-example';
import {DatepickerMinMaxExample} from './components/datepicker/datepicker-min-max/datepicker-min-max-example';
import {DatepickerCustomeHeader1Component,ExampleHeader} from './components/datepicker/datepicker-custome-header1/datepicker-custome-header1.component'
// import {DatepickerMomentExample} from './components/datepicker/datepicker-moment/datepicker-moment-example';
import {DatepickerOverviewExample} from './components/datepicker/datepicker-overview/datepicker-overview-example';
import {DatepickerStartViewExample} from './components/datepicker/datepicker-start-view/datepicker-start-view-example';
import {DatepickerTouchExample} from './components/datepicker/datepicker-touch/datepicker-touch-example';
import {DatepickerValueExample} from './components/datepicker/datepicker-value/datepicker-value-example';
// import{DatepickerViewsSelectionExample} from './components/datepicker/datepicker-views-selection/datepicker-views-selection-example';
import {DialogContentExample} from './components/dialog/dialog-content/dialog-content-example';
import {DialogDataExample} from './components/dialog/dialog-data/dialog-data-example';
import {DialogAnimationComponent} from './components/dialog/dialog-animation/dialog-animation.component'
import {DialogElementsExample} from './components/dialog/dialog-elements/dialog-elements-example';
import {DialogOpenComponent} from './components/dialog/dialog-open/dialog-open.component';
import {DialogfromMenuOpenComponent} from './components/dialog/dialogfrom-menu-open/dialogfrom-menu-open.component'
import {DialogAnimationsExample} from './components/dialog/dialog-animations/dialog-animations-example';
import {DialogFromMenuExample} from './components/dialog/dialog-from-menu/dialog-from-menu-example';
import {DialogHarnessExample} from './components/dialog/dialog-harness/dialog-harness-example';
import {DialogOverviewExample} from './components/dialog/dialog-overview/dialog-overview-example';
import { MatIconModule } from '@angular/material/icon';
import {DialogContentOpenComponent} from './components/dialog/dialog-content-open/dialog-content-open.component'
import {DialogElementOpenComponent} from './components/dialog/dialog-element-open/dialog-element-open.component'
import {DialogOverviewOpenComponent} from './components/dialog/dialog-overview-open/dialog-overview-open.component'
// import {DialogOverview1Component} from './components/dialog/dialog-overview1/dialog-overview1.component'
import {DividerHarnessExample} from './components/divider/divider-harness/divider-harness-example';
import {DividerOverviewExample} from './components/divider/divider-overview/divider-overview-example';
import {ExpansionExpandCollapseAllExample} from './components/expansion/expansion-expand-collapse-all/expansion-expand-collapse-all-example';
import {ExpansionHarnessExample} from './components/expansion/expansion-harness/expansion-harness-example';
import {ExpansionOverviewExample} from './components/expansion/expansion-overview/expansion-overview-example';
import {ExpansionStepsExample} from './components/expansion/expansion-steps/expansion-steps-example';
// import{FormFieldCustomControlExample} from './components/form-field/form-field-custom-control/form-field-custom-control-example';
import {FormFieldErrorExample} from './components/form-field/form-field-error/form-field-error-example';
import {FormFieldHarnessExample} from './components/form-field/form-field-harness/form-field-harness-example';
import {FormFieldHintExample} from './components/form-field/form-field-hint/form-field-hint-example';
import {FormFieldLabelExample} from './components/form-field/form-field-label/form-field-label-example';
import {FormFieldOverviewExample} from './components/form-field/form-field-overview/form-field-overview-example';
import {FormFieldPrefixSuffixExample} from './components/form-field/form-field-prefix-suffix/form-field-prefix-suffix-example';
import {FormFieldThemingExample} from './components/form-field/form-field-theming/form-field-theming-example';
import {FormFieldAppearanceExample} from './components/form-field/form-field-appearance/form-field-appearance-example'
import {GridListDynamicExample} from './components/grid-list/grid-list-dynamic/grid-list-dynamic-example';
import {GridListHarnessExample} from './components/grid-list/grid-list-harness/grid-list-harness-example';
import {GridListOverviewExample} from './components/grid-list/grid-list-overview/grid-list-overview-example'
import {IconHarnessExample} from './components/icon/icon-harness/icon-harness-example';
import {IconOverviewExample} from './components/icon/icon-overview/icon-overview-example';
import {IconSvgExample} from './components/icon/icon-svg/icon-svg-example';
import {InputClearableExample} from './components/input/input-clearable/input-clearable-example';
import {InputErrorStateMatcherExample} from './components/input/input-error-state-matcher/input-error-state-matcher-example'
import {InputErrorsExample} from './components/input/input-errors/input-errors-example';
import {InputFormExample} from './components/input/input-form/input-form-example';
import {InputHarnessExample} from './components/input/input-harness/input-harness-example';
import {InputHintExample} from './components/input/input-hint/input-hint-example';
import {InputOverviewExample} from './components/input/input-overview/input-overview-example';
import {InputPrefixSuffixExample} from './components/input/input-prefix-suffix/input-prefix-suffix-example';
import {ListHarnessExample} from './components/list/list-harness/list-harness-example';
import {ListOverviewExample} from './components/list/list-overview/list-overview-example';
import {ListSectionsExample} from './components/list/list-sections/list-sections-example';
import {ListSingleSelectionExample} from './components/list/list-single-selection/list-single-selection-example';
import {MenuHarnessExample} from './components/menu/menu-harness/menu-harness-example';
import {MenuIconsExample} from './components/menu/menu-icons/menu-icons-example';
import {MenuNestedExample} from './components/menu/menu-nested/menu-nested-example';
import {MenuOverviewExample} from './components/menu/menu-overview/menu-overview-example';
import {MenuPositionExample} from './components/menu/menu-position/menu-position-example';

import {PaginatorConfigurableExample} from './components/paginator/paginator-configurable/paginator-configurable-example';
import {PaginatorHarnessExample} from './components/paginator/paginator-harness/paginator-harness-example';
// import {PaginatorIntlExample} from './components/paginator/paginator-intl/paginator-intl-example';
import {PaginatorOverviewExample} from './components/paginator/paginator-overview/paginator-overview-example';
import {ProgressBarBufferExample} from './components/progress-bar/progress-bar-buffer/progress-bar-buffer-example';
import {ProgressBarConfigurableExample} from './components/progress-bar/progress-bar-configurable/progress-bar-configurable-example';
import {ProgressBarDeterminateExample} from './components/progress-bar/progress-bar-determinate/progress-bar-determinate-example';
import {ProgressBarHarnessExample} from './components/progress-bar/progress-bar-harness/progress-bar-harness-example';
import {ProgressBarIndeterminateExample} from './components/progress-bar/progress-bar-indeterminate/progress-bar-indeterminate-example';
import {ProgressBarQueryExample} from './components/progress-bar/progress-bar-query/progress-bar-query-example';
import {ProgressSpinnerConfigurableExample} from './components/progress-spinner/progress-spinner-configurable/progress-spinner-configurable-example';
import {ProgressSpinnerHarnessExample} from './components/progress-spinner/progress-spinner-harness/progress-spinner-harness-example';
import {ProgressSpinnerOverviewExample} from './components/progress-spinner/progress-spinner-overview/progress-spinner-overview-example';
import {RadioHarnessExample} from './components/radio/radio-harness/radio-harness-example';
import {RadioNgModelExample} from './components/radio/radio-ng-model/radio-ng-model-example';
import {RadioOverviewExample} from './components/radio/radio-overview/radio-overview-example';

import {SelectCustomTriggerExample} from './components/select/select-custom-trigger/select-custom-trigger-example';
import {SelectDisabledExample} from './components/select/select-disabled/select-disabled-example'
import {SelectErrorStateMatcherExample} from './components/select/select-error-state-matcher/select-error-state-matcher-example';
import {SelectFormExample} from './components/select/select-form/select-form-example';
import {SelectHarnessExample} from './components/select/select-harness/select-harness-example';
import {SelectHintErrorExample} from './components/select/select-hint-error/select-hint-error-example';
import {SelectInitialValueExample} from './components/select/select-initial-value/select-initial-value-example';
import {SelectMultipleExample} from './components/select/select-multiple/select-multiple-example';
import {SelectNoRippleExample} from './components/select/select-no-ripple/select-no-ripple-example';
import {SelectOptgroupExample} from './components/select/select-optgroup/select-optgroup-example';
import {SelectOverviewExample} from './components/select/select-overview/select-overview-example';
import {SelectPanelClassExample} from './components/select/select-panel-class/select-panel-class-example';
import {SelectReactiveFormExample} from './components/select/select-reactive-form/select-reactive-form-example';
import {SelectResetExample} from './components/select/select-reset/select-reset-example';
import {SelectValueBindingExample} from './components/select/select-value-binding/select-value-binding-example';
import {SortHarnessExample} from './components/sort/sort-harness/sort-harness-example';
import {MatStepperModule} from '@angular/material/stepper';
import {SortOverviewExample} from'./components/sort/sort-overview/sort-overview-example';
// import { StepperAnimationsExample } from './components/stepper/stepper-animations/stepper-animations-example';
import {StepperEditableExample} from './components/stepper/stepper-editable/stepper-editable-example';
import {StepperErrorsExample} from './components/stepper/stepper-errors/stepper-errors-example';
import {StepperHarnessExample} from './components/stepper/stepper-harness/stepper-harness-example';
import {StepperHeaderPositionExample} from './components/stepper/stepper-header-position/stepper-header-position-example';
// import {StepperIntl} from './components/stepper/stepper-intl/stepper-intl-example';
import {StepperLabelPositionBottomExample} from './components/stepper/stepper-label-position-bottom/stepper-label-position-bottom-example';
import {StepperLazyContentExample} from './components/stepper/stepper-lazy-content/stepper-lazy-content-example';
import {StepperOptionalExample} from './components/stepper/stepper-optional/stepper-optional-example';
import {StepperOverviewExample} from './components/stepper/stepper-overview/stepper-overview-example';
import {StepperResponsiveExample} from './components/stepper/stepper-responsive/stepper-responsive-example';
import {StepperStatesExample} from './components/stepper/stepper-states/stepper-states-example';
import {StepperVerticalExample} from './components/stepper/stepper-vertical/stepper-vertical-example'
// import { SnackBarComponentExample, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample } from './components/snack-bar';
// import { SlideToggleConfigurableExample } from './components/slide-toggle';
// import { SliderFormattingExample, SliderHarnessExample, SliderOverviewExample } from './components/slider';
// import { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleHarnessExample, SlideToggleOverviewExample } from './components/slide-toggle';
// import { SliderConfigurableExample, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample } from './components/slider';
// import { SidenavAutosizeExample, SidenavBackdropExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavFixedExample, SidenavHarnessExample, SidenavModeExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample } from './components/sidenav';
// import {SidenavResponsiveExample} from './components/sidenav/sidenav-responsive/sidenav-responsive-example';
import {SlideToggleConfigurableExample} from './components/slide-toggle/slide-toggle-configurable/slide-toggle-configurable-example';
import {SlideToggleFormsExample} from './components/slide-toggle/slide-toggle-forms/slide-toggle-forms-example';
import {SlideToggleHarnessExample} from './components/slide-toggle/slide-toggle-harness/slide-toggle-harness-example';
import {SlideToggleOverviewExample} from './components/slide-toggle/slide-toggle-overview/slide-toggle-overview-example'
import {TableBasicExample} from './components/table/table-basic/table-basic-example';
import {TableColumnStylingExample} from './components/table/table-column-styling/table-column-styling-example';
import {TableDynamicArrayDataExample} from './components/table/table-dynamic-array-data/table-dynamic-array-data-example';
import {TableDynamicColumnsExample} from './components/table/table-dynamic-columns/table-dynamic-columns-example';
import {TableDynamicObservableDataExample} from './components/table/table-dynamic-observable-data/table-dynamic-observable-data-example';
import {TableExpandableRowsExample} from './components/table/table-expandable-rows/table-expandable-rows-example';
import {TableFilteringExample} from './components/table/table-filtering/table-filtering-example';
import {TableFlexBasicExample} from './components/table/table-flex-basic/table-flex-basic-example';
import {TableFooterRowExample} from './components/table/table-footer-row/table-footer-row-example';
import {TableGeneratedColumnsExample} from './components/table/table-generated-columns/table-generated-columns-example';
import {TableHarnessExample} from './components/table/table-harness/table-harness-example';
import {TableHttpExample} from './components/table/table-http/table-http-example';
import {TableMultipleHeaderFooterExample} from './components/table/table-multiple-header-footer/table-multiple-header-footer-example';
import {TableOverviewExample} from './components/table/table-overview/table-overview-example';
import {TablePaginationExample} from './components/table/table-pagination/table-pagination-example';
import {TableRecycleRowsExample} from './components/table/table-recycle-rows/table-recycle-rows-example';
import {TableReorderableExample} from './components/table/table-reorderable/table-reorderable-example';
import {TableRowBindingExample} from './components/table/table-row-binding/table-row-binding-example';
import {TableRowContextExample} from './components/table/table-row-context/table-row-context-example';
import {TableSelectionExample} from './components/table/table-selection/table-selection-example';
import {TableSortingExample} from './components/table/table-sorting/table-sorting-example';
import {TableStickyColumnsExample} from './components/table/table-sticky-columns/table-sticky-columns-example';
import {TableStickyComplexExample} from './components/table/table-sticky-complex/table-sticky-complex-example';
import {TableStickyComplexFlexExample} from './components/table/table-sticky-complex-flex/table-sticky-complex-flex-example';
import {TableStickyFooterExample} from './components/table/table-sticky-footer/table-sticky-footer-example';
import {TableStickyHeaderExample} from './components/table/table-sticky-header/table-sticky-header-example';
import {TableTextColumnExample} from './components/table/table-text-column/table-text-column-example';
import {TableTextColumnAdvancedExample} from './components/table/table-text-column-advanced/table-text-column-advanced-example';
import {TableWithRipplesExample} from './components/table/table-with-ripples/table-with-ripples-example';
// import {TableWrappedExample} from './components/table/table-wrapped/table-wrapped-example';
import {TabGroupAlignExample} from './components/tabs/tab-group-align/tab-group-align-example';
import {TabGroupAnimationsExample} from './components/tabs/tab-group-animations/tab-group-animations-example';
import {TabGroupAsyncExample} from './components/tabs/tab-group-async/tab-group-async-example';
import {TabGroupBasicExample} from './components/tabs/tab-group-basic/tab-group-basic-example';
import {TabGroupCustomLabelExample} from './components/tabs/tab-group-custom-label/tab-group-custom-label-example';
import {TabGroupDynamicExample} from './components/tabs/tab-group-dynamic/tab-group-dynamic-example';
import {TabGroupDynamicHeightExample} from './components/tabs/tab-group-dynamic-height/tab-group-dynamic-height-example';
import {TabGroupHarnessExample} from './components/tabs/tab-group-harness/tab-group-harness-example';
import {TabGroupHeaderBelowExample} from './components/tabs/tab-group-header-below/tab-group-header-below-example';
import {TabGroupLazyLoadedExample} from './components/tabs/tab-group-lazy-loaded/tab-group-lazy-loaded-example';
import {TabGroupPreserveContentExample} from './components/tabs/tab-group-preserve-content/tab-group-preserve-content-example';
import {TabGroupStretchedExample} from './components/tabs/tab-group-stretched/tab-group-stretched-example';
import {TabGroupThemeExample} from './components/tabs/tab-group-theme/tab-group-theme-example';
import {TabNavBarBasicExample} from './components/tabs/tab-nav-bar-basic/tab-nav-bar-basic-example';
import {ToolbarBasicExample} from './components/toolbar/toolbar-basic/toolbar-basic-example';
import {ToolbarHarnessExample} from './components/toolbar/toolbar-harness/toolbar-harness-example';
import {ToolbarMultirowExample} from './components/toolbar/toolbar-multirow/toolbar-multirow-example';
import {ToolbarOverviewExample} from './components/toolbar/toolbar-overview/toolbar-overview-example';
import {TooltipAutoHideExample} from './components/tooltip/tooltip-auto-hide/tooltip-auto-hide-example';
import {TooltipCustomClassExample} from './components/tooltip/tooltip-custom-class/tooltip-custom-class-example'
import {TooltipDelayExample} from './components/tooltip/tooltip-delay/tooltip-delay-example';
import {TooltipDisabledExample} from './components/tooltip/tooltip-disabled/tooltip-disabled-example';
import {TooltipHarnessExample} from './components/tooltip/tooltip-harness/tooltip-harness-example';
import {TooltipManualExample} from './components/tooltip/tooltip-manual/tooltip-manual-example';
import {TooltipMessageExample} from './components/tooltip/tooltip-message/tooltip-message-example';
import {TooltipModifiedDefaultsExample} from './components/tooltip/tooltip-modified-defaults/tooltip-modified-defaults-example';
import {TooltipOverviewExample} from './components/tooltip/tooltip-overview/tooltip-overview-example';
import {TooltipPositionExample} from './components/tooltip/tooltip-position/tooltip-position-example';
// import {MatDialogModule} from '@angular/material/dialog';
import {TreeChecklistExample} from './components/tree/tree-checklist/tree-checklist-example';
import {TreeDynamicExample} from './components/tree/tree-dynamic/tree-dynamic-example';
import {TreeFlatOverviewExample} from './components/tree/tree-flat-overview/tree-flat-overview-example';
import {TreeHarnessExample} from './components/tree/tree-harness/tree-harness-example';
import {TreeLoadmoreExample} from './components/tree/tree-loadmore/tree-loadmore-example';
import {TreeNestedOverviewExample} from './components/tree/tree-nested-overview/tree-nested-overview-example';
import {SliderConfigurableExample} from './components/slider/slider-configurable/slider-configurable-example';
import {SliderFormattingExample} from './components/slider/slider-formatting/slider-formatting-example';
import {SliderHarnessExample} from './components/slider/slider-harness/slider-harness-example';
import {SliderOverviewExample} from './components/slider/slider-overview/slider-overview-example';
import {SidenavAutosizeExample} from './components/sidenav/sidenav-autosize/sidenav-autosize-example';
import {SidenavBackdropExample} from './components/sidenav/sidenav-backdrop/sidenav-backdrop-example';
import {SidenavDisableCloseExample} from './components/sidenav/sidenav-disable-close/sidenav-disable-close-example';
import {SidenavDrawerOverviewExample} from './components/sidenav/sidenav-drawer-overview/sidenav-drawer-overview-example';
import {SidenavFixedExample} from './components/sidenav/sidenav-fixed/sidenav-fixed-example';
import {SidenavHarnessExample} from './components/sidenav/sidenav-harness/sidenav-harness-example';
import {SidenavModeExample} from './components/sidenav/sidenav-mode/sidenav-mode-example';
import {SidenavOpenCloseExample} from './components/sidenav/sidenav-open-close/sidenav-open-close-example';
import {SidenavOverviewExample} from './components/sidenav/sidenav-overview/sidenav-overview-example';
import {SidenavPositionExample} from './components/sidenav/sidenav-position/sidenav-position-example';
import {SidenavResponsiveExample} from './components/sidenav/sidenav-responsive/sidenav-responsive-example';
import {SnackBarComponentExample} from './components/snack-bar/snack-bar-component/snack-bar-component-example';
import {SnackBarHarnessExample} from './components/snack-bar/snack-bar-harness/snack-bar-harness-example';
import {SnackBarOverviewExample} from './components/snack-bar/snack-bar-overview/snack-bar-overview-example';
import {SnackBarPositionExample} from './components/snack-bar/snack-bar-position/snack-bar-position-example';
import {DatepickerColorExample} from './components/datepicker/datepicker-color/datepicker-color-example';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerColorExample,
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderHarnessExample,
    SliderOverviewExample,
    TooltipAutoHideExample,
    TooltipPositionExample,
    TooltipOverviewExample,
    TreeChecklistExample,
    TreeDynamicExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
    TreeFlatOverviewExample,
    TreeHarnessExample,
    TooltipHarnessExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipMessageExample,
    TooltipManualExample,
    TooltipCustomClassExample,
    TooltipModifiedDefaultsExample,
    ToolbarBasicExample,
    ToolbarHarnessExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupPreserveContentExample,
    TabGroupStretchedExample,
    TabNavBarBasicExample,
    TabGroupThemeExample,
    TabGroupLazyLoadedExample,
    TabGroupHeaderBelowExample,
    TabGroupHarnessExample,
    TabGroupDynamicExample,
    TabGroupDynamicHeightExample,
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TableBasicExample,
    TableFilteringExample,
    TableDynamicArrayDataExample,
    TableDynamicObservableDataExample,
    TableHttpExample,
    TableHarnessExample,
    TableOverviewExample,
    TableFlexBasicExample,
    TableGeneratedColumnsExample,
    TableFooterRowExample,
    TableDynamicColumnsExample,
    TableExpandableRowsExample,
    TableColumnStylingExample,
    TableReorderableExample,
    TableRecycleRowsExample,
    TablePaginationExample,
    TableMultipleHeaderFooterExample,
    TableRowContextExample,
    TableRowBindingExample,
    TableSortingExample,
    TableSelectionExample,
    TableStickyFooterExample,
    TableStickyHeaderExample,
    TableStickyComplexFlexExample,
    TableStickyComplexExample,
    TableTextColumnExample,
    TableStickyColumnsExample,
    TableTextColumnAdvancedExample,
    // TableWrappedExample,
    TableWithRipplesExample,
    // StepperIntl,
    StepperEditableExample,
    StepperVerticalExample,
    StepperHeaderPositionExample,
    StepperHarnessExample,
    StepperLazyContentExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperResponsiveExample,
    StepperOverviewExample,
    StepperStatesExample,
    // StepperAnimationsExample,
    SortHarnessExample,
    SortOverviewExample,
    SnackBarComponentExample,
    SnackBarHarnessExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
    // SliderFormattingExample,
    // SliderHarnessExample,
    // SliderOverviewExample,
    SlideToggleConfigurableExample,
   
    SlideToggleFormsExample,
    SlideToggleHarnessExample,
    SlideToggleOverviewExample,
    // SliderConfigurableExample,
    // SliderFormattingExample,
    // SliderHarnessExample,
    // SliderOverviewExample,
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavHarnessExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
    SelectValueBindingExample,
    SelectResetExample,
    SelectOptgroupExample,
    SelectMultipleExample,
    SelectHintErrorExample,
    SelectCustomTriggerExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHarnessExample,
    SelectDisabledExample,
    SelectInitialValueExample,
    SelectNoRippleExample,
    SelectOverviewExample,
    SelectPanelClassExample,
    SelectReactiveFormExample,
    RadioHarnessExample,
    RadioNgModelExample,
    RadioOverviewExample,
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerHarnessExample,
    ProgressSpinnerOverviewExample,
    ProgressBarBufferExample,
    ProgressBarDeterminateExample,
    ProgressBarQueryExample,
    ProgressBarIndeterminateExample,
    ProgressBarHarnessExample,
    ProgressBarConfigurableExample,
    PaginatorConfigurableExample,
    PaginatorHarnessExample,
    // PaginatorIntlExample,
    PaginatorOverviewExample,
    MenuHarnessExample,
    MenuNestedExample,
    MenuPositionExample,
    MenuOverviewExample,
    MenuIconsExample,
    InputFormExample,
    ListHarnessExample,
    ListOverviewExample,
    ListSingleSelectionExample,
    ListSectionsExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    InputHintExample,
    InputHarnessExample,
    InputErrorsExample,
    InputErrorStateMatcherExample,
    InputClearableExample,
    IconHarnessExample,
    IconSvgExample,
    IconOverviewExample,
    GridListDynamicExample,
    GridListHarnessExample,
    GridListOverviewExample,
    FormFieldAppearanceExample,
    FormFieldOverviewExample,
    FormFieldThemingExample,
    FormFieldPrefixSuffixExample,
    FormFieldLabelExample,
    FormFieldHintExample,
    FormFieldHarnessExample,
    FormFieldErrorExample,
    // FormFieldCustomControlExample,
    ExpansionExpandCollapseAllExample,
    ExampleHeader,
    DialogAnimationsExample,
    DialogOpenComponent,
    DialogfromMenuOpenComponent,
    DialogContentOpenComponent,
    DialogAnimationComponent,
    DialogFromMenuExample,
    DialogOverviewOpenComponent,
    ExpansionStepsExample,
    ExpansionHarnessExample,
    ExpansionOverviewExample,
    DialogHarnessExample,
    DividerHarnessExample,
    DividerOverviewExample,
    // DialogOverview1Component,
    DialogOverviewExample,
    DialogContentExample,
    DialogDataExample,
    DialogElementsExample,
    DialogElementOpenComponent,
    // DatepickerCustomHeaderExample,
    DatepickerApiExample,
    DatepickerActionsExample,
    DateRangePickerSelectionStrategyExample,
    DateRangePickerOverviewExample,
    DateRangePickerFormsExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerCustomeHeader1Component,
    // DatepickerColorExample,
    DatepickerFilterExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerHarnessExample,
    DatepickerInlineCalendarExample,
    // DatepickerFormatsExample,
    DateRangePickerComparisonExample,
    DatepickerValueExample,
    DatepickerMinMaxExample,
    DatepickerTouchExample,
    // DatepickerLocaleExample,
    // DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    // DatepickerViewsSelectionExample,
    ChipsAutocompleteExample,
    ChipsAvatarExample,
    // ChipsHarnessExample,
    ChipsInputExample,
    ElevationOverviewExample,
    RippleOverviewExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    ChipsFormControlExample,
    ChipsDragDropExample,
    CardActionsExample,
    CheckboxConfigurableExample,
    CheckboxHarnessExample,
    CheckboxOverviewExample,
    CheckboxReactiveFormsExample,
    CardHarnessExample,
    CardFooterExample,
    CardMediaSizeExample,
    CardFancyExample,
    CardSubtitleExample,
    CardOverviewExample,
    ButtonToggleExclusiveExample,
    ButtonToggleHarnessExample,
    ButtonToggleFormsExample,
    ButtonToggleAppearanceExample,
    ButtonToggleOverviewExample,
    ButtonToggleModeExample,
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    BadgeOverviewExample,
    ButtonHarnessExample,
    ButtonOverviewExample,
    BadgeHarnessExample,
    AutocompleteFilterExample,
    AutocompleteHarnessExample,
    AutocompleteOptgroupExample,
    BottomSheetHarnessExample,
    AutocompletePlainInputComponent,
    BottomSheetOverviewExample,
    AutocompleteSimpleComponent,
    AutocompleteOverviewComponent
  ],
  entryComponents:[DialogOpenComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ {provide: MatDialogRef, useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
