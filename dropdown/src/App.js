import React from 'react';
import './App.css';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

function App() {
  return (
    <div className="App">
      <Stack tokens={stackTokens}>
        <Dropdown
          placeholder="Select an option"
          label="Basic uncontrolled example"
          options={options}
          styles={dropdownStyles}
        />
        <Dropdown
          label="Disabled example with defaultSelectedKey"
          defaultSelectedKey="broccoli"
          options={options}
          disabled={true}
          styles={dropdownStyles}
        />
        <Dropdown
          placeholder="Select options"
          label="Multi-select uncontrolled example"
          defaultSelectedKeys={['apple', 'banana', 'grape']}
          multiSelect
          options={options}
          styles={dropdownStyles}
        />
      </Stack>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// // const dropdownStyles: Partial<IDropdownStyles> = {
// //   dropdown: { width: 300 },
// // };

// const dropdownStyles = {
//   dropdown: { width: 300 },
// };

// // const options: IDropdownOption[] = [
// const options= [
//   { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
//   { key: 'apple', text: 'Apple' },
//   { key: 'banana', text: 'Banana' },
//   { key: 'orange', text: 'Orange', disabled: true },
//   { key: 'grape', text: 'Grape' },
//   { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
//   { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
//   { key: 'broccoli', text: 'Broccoli' },
//   { key: 'carrot', text: 'Carrot' },
//   { key: 'lettuce', text: 'Lettuce' },
// ];

// // const stackTokens: IStackTokens = { childrenGap: 20 };
// const stackTokens = { childrenGap: 20 };

//   );
// };






