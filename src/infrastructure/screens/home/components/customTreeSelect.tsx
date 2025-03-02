/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * @author Saul Sosa
 * @date October 20 2024
 *
 * @description This file implements a reusable TreeSelect React component that can be used to select countries or grades.
 */
import React from "react";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { TreeSelect } from "primereact/treeselect";
import { DropdownChangeEvent } from "primereact/dropdown";

/**
 * Props interface for the reusable TreeSelect component.
 * @template T - Generic type to allow flexibility in the component, supporting different data types like Country.
 */
interface CustomTreeSelectProps<T> {
  value: string; // Currently selected value (can be a generic type or a string)
  options: T[]; // Array of options to be displayed in the dropdown
  optionLabel: string; // Label field from options to display as the option name
  placeholder: string; // Placeholder text to display when no option is selected
  onChange: (e: DropdownChangeEvent) => void; // Callback function triggered when an option is selected
  nodeTemplate?: (option: T) => React.ReactNode; // Custom template to display options in the dropdown
  valueTemplate?: (option: T[], props: {placeholder: string}) => JSX.Element; // Custom template to display the selected value
  itemTemplate?: (option: T) => React.ReactNode; // Custom template to display options in the dropdown
  panelFooterTemplate?: () => React.ReactNode; // Template for the footer section of the dropdown panel
  dropdownClassName?: string; // CSS class for the dropdown styling
  filter?: boolean; // Whether to enable filtering in the dropdown
}

/**
 * Generic TreeSelect component that can be reused for country or grade selection.
 * @template T - Supports different data types for flexibility in different dropdown use cases (e.g., countries or grades).
 */
export const CustomTreeSelect = <T,>({
  value, // Selected value
  options, // Array of options to select from
  placeholder, // Placeholder text when no option is selected
  nodeTemplate, // Custom template for rendering options in the dropdown
  valueTemplate, // Custom template for rendering the selected value
  onChange, // Callback function triggered on change
  panelFooterTemplate, // Custom footer for the dropdown panel
  dropdownClassName = "w-full vertical-align-middle", // Default dropdown styling
  filter, // Boolean flag to enable or disable filtering
}: CustomTreeSelectProps<T>) => {
  return (
    <TreeSelect
      value={value} // Selected value passed to TreeSelect
      onChange={onChange} // Trigger onChange event when an option is selected
      options={options} // Array of options passed to the dropdown
      placeholder={placeholder} // Placeholder text when no option is selected
      filter={filter ? true : false} // Conditionally enable filtering if 'filter' prop is true
      className={dropdownClassName} // Apply CSS class for dropdown styling
      nodeTemplate={nodeTemplate} // Custom template for rendering options
      valueTemplate={valueTemplate} // Custom template for rendering the selected value
      panelFooterTemplate={panelFooterTemplate} // Custom footer for the dropdown panel
      dropdownIcon={
        <ChevronDownIcon /> // Show ChevronDownIcon by default
      }
    />
  );
};