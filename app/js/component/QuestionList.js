var React = require('react');
var QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({
	render: function() {
		var questions = this.props.questions;
		var _this = this;

		if (!Array.isArray(questions)) {
			throw new Error('this.pros.questions must be Array!');
		}
		var questionComps = questions.map(function(qst) {
			return <QuestionItem key={qst.key} 
								newKey={qst.key}
								title={qst.title} 
								description={qst.description} 
								voteCount={qst.voteCount}
								onVote={_this.props.onVote} />
		});;
		return (
			<div id="questions" className="">
			  {questionComps}
			</div>
		);
	}
});