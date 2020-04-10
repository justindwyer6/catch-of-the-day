import React from 'react';

class EditFishFrom extends React.Component {
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name}/>
        <input type="text" name="price" value={this.props.fish.price}/>
        <select type="text" name="status" value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="description" value={this.props.fish.description}/>
        <input type="text" name="image" value={this.props.fish.image}/>
      </div>
    )
  }
}

export default EditFishFrom;