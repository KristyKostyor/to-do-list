import { Component } from "react";
import heart from './heart.png';
import rose from './rose.png'

export class ToDoList extends Component {
  state = {
    inputUser: "",
    list: [],
  };
  onFormSubmit = (e) => {
    e.preventDefault();
  };
  onChangeEvent = (e) => {
    this.setState({ inputUser: e });
  };
  addItem (input) {
    if (input === '') {
      alert("Please enter an item");
    } else {
      let doList = this.state.list;
      doList.push(input);
      this.setState({ list: doList, inputUser: ''});
    }
  }
  deleteItem () {
    let doList =this.state.list;
    doList=[];
    this.setState({list: doList})
  }
  crosseWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="New item"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.inputUser}
            />
            <button className='add' onClick={() => this.addItem(this.state.inputUser)}>
              <img src={heart} alt="heart" width="10px" />
            </button>
          </div>
          <div className="container">
            <ul>
              {this.state.list.map((item, index) => (
                <li onClick={this.crosseWord} key={index}>
                  <img src={rose} width="30px" alt="rose" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="container">
            <button className="btn" onClick={() => this.deleteItem(this.state.inputUser)}> Clear</button>
          </div>
        </form>
      </div>
    );
  }
}