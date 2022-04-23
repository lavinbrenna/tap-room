import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetails';


class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      sellPint: false
    };
  }
  handleClick = () => {
    if(this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        sellPint: false
      });
    }else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleSellPint = () => {
    console.log("sell pint!");
    this.setState({sellPint: true});
  }

  handlePintDecrease = (id) => {
    const newKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    if(newKeg.pintsLeft - 1 < 0){
      newKeg.pintsLeft = 0;
    }else{
      newKeg.pintsLeft -= 1;
    }
    const newMainKegList = this.state.mainKegList
    .filter(keg => keg.id !== id)
    .concat(newKeg);
    this.setState({mainKegList: newMainKegList,
      selectedKeg: null, sellPint: false
    });
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList, formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
  if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Keg List";
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    }
    else{
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg} onSellPint = {this.handlePintDecrease}/>
      buttonText = "Add Keg";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}
export default KegControl;