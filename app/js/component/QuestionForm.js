var React = require('react');

module.exports = React.createClass({
	handleForm: function(e) {
		e.preventDefault();
		if(!this.refs.title.getDOMNode().value.trim()) return ;
		if(!this.refs.description.getDOMNode().value.trim()) return ;
		var newQuestion = {
			title: this.refs.title.getDOMNode().value.trim(),
			description: this.refs.description.getDOMNode().value.trim(),
			voteCount: 0,
		}

		this.refs.AddQuestionForm.getDOMNode().reset();

		this.props.onNewQuestion(newQuestion);
	},
	render: function() {
		var style = {
			display: this.props.formDisplayed ? 'block' : 'none'
		};
		return (
			<form ref="AddQuestionForm" name="addQuestion" className="clearfix" style={style} onSubmit={this.handleForm}>
			  <div className="form-group">
			    <label htmlFor="qtitle">问题</label>
			    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
			  </div>
			  <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
			  <button className="btn btn-success pull-right">确认</button>
			  <a onClick={this.props.onToggleForm} className="btn btn-default pull-right">取消</a>
			</form>
		);
	}
});