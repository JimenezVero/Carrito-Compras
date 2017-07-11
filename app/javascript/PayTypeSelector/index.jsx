import React from 'react'

import NoPayType            from './NoPayType';
import CreditCardPayType    from './CreditCardPayType';
import CheckPayType         from './CheckPayType';
import PurchaseOrderPayType from './PurchaseOrderPayType';

class PayTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
    this.state = { selectedPayType: null };
  }

  onPayTypeSelected(event) {
    this.setState({ selectedPayType: event.target.value });
  }

  render() {
    let PayTypeCustomComponent = NoPayType;
    if (this.state.selectedPayType == "Credit card") {
      PayTypeCustomComponent = CreditCardPayType;
    } else if (this.state.selectedPayType == "Check") {
      PayTypeCustomComponent = CheckPayType;
    } else if (this.state.selectedPayType == "Purchase order") {
      PayTypeCustomComponent = PurchaseOrderPayType;
    }
    return (
      
          </select>
        </div>
        <PayTypeCustomComponent />
      </div>
    );
  }
}
export default PayTypeSelector
