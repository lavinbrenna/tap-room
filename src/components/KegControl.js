import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetails';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editKeg: false,
      sellPint: false
    };
  }
  handleClick = () => {
    if(this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    }else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  handleEditClick = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
    .filter(keg=> keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
    this.setState({mainKegList: editedMainKegList, editing: false, selectedKeg: null});
  }

  handleSellPint = (kegToSell) => {
    console.log("sell pint!");
    const sellingMainKegList = this.state.mainKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToSell.pintsLeft - 1);
    this.setState({mainKegList: sellingMainKegList, selectedKeg: null , sellPint: false});
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

    if(this.state.editKeg){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg}/>
      buttonText = "Return to Keg List";
    }
    else if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Keg List";
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    }
    else{
      if(this.state.sellPint){
        currentlyVisibleState = <KegList kegList ={this.state.mainKegList} onSellPint = {this.handleSellPint}/>
        buttonText ="Add Keg";
      }else{
        currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg}/>
        buttonText = "Add Keg";
      }
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