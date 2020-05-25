import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles,IDropdownProps } from 'office-ui-fabric-react/lib/Dropdown';

// import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

const iconStyles = { marginRight: '8px' };

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { 
    height: 130,
    width: 130,
  },

  dropdownItem:{
    // backgroundColor:'yellow'
  },
  // caretDown :{
  //   backgroundColor:'yellow'
  // }
  dropdownItemSelected:{
    backgroundColor:'green'

  }
};

const options: IDropdownOption[] = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header  },
  { key: 'apple', text: 'Apple', data : { icon : 'TextDocument' }},
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

const onRenderPlaceholder = (props: IDropdownProps): JSX.Element => {
  return (
    <div className="dropdownExample-placeholder">
      <Icon style={iconStyles} iconName={'MessageFill'} aria-hidden="true" />
      <span>{props.placeholder}</span>
    </div>
  );
};

const onRenderLabel = (props: IDropdownProps): JSX.Element => {
  return (
    <div className="dropdownExample-placeholder">
      <Icon style={iconStyles} iconName={'MessageFill'} aria-hidden="true" />
      <span>{props.placeholder}</span>
    </div>
  );
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        // onRenderPlaceholder={onRenderPlaceholder}
    onRenderPlaceHolder = { onRenderPlaceholder }
    onRenderLabel = {onRenderLabel}
        options={options}
        styles={dropdownStyles}
      />
      </Stack>
  );
};

//

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;



