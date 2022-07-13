# react-apple-pay-button
An [**Apple Pay**](https://developer.apple.com/apple-pay/implementation/) button for [**React**](https://reactjs.org/), which tries its best to abide by the [**Human Interface Guidelines**](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/buttons-and-marks/).

## 🚀 Getting Started

Using [**Yarn**]():

```
yarn add react-apple-pay-button
```

## ✍️  Example

```javascript
import React, { useCallback } from "react";
import { ApplePayButton } from "react-apple-pay-button";

function App() {
  const onRequestApplePay = useCallback(() => /* TODO */ []);
  return (
    <ApplePayButton onClick={onRequestApplePay} theme="light">
      {"Subscribe with"}
    </ApplePayButton>
  );
}

export default App;
```

## 🚀 License
[**MIT**](./LICENSE)
