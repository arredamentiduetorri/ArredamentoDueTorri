var CategoriaControl = createClass({
	handleChange: function (e) {
		this.props.onChange(e.target.value);
	},
	render: function () {
		var field = this.props.field;
		var options = field.get('options');
		var listId = 'categoria-suggestions-' + field.get('name');
		var datalistOptions = options
			? options.toJS().map(function (opt) {
					return h('option', { key: opt, value: opt });
				})
			: [];
		return h(
			'div',
			{},
			h('input', {
				type: 'text',
				list: listId,
				value: this.props.value || '',
				onChange: this.handleChange,
				style: {
					width: '100%',
					padding: '10px',
					fontSize: '15px',
					border: '1px solid #dfdfe3',
					borderRadius: '4px',
					boxSizing: 'border-box',
				},
			}),
			h('datalist', { id: listId }, datalistOptions)
		);
	},
});

var CategoriaPreview = createClass({
	render: function () {
		return h('div', {}, this.props.value);
	},
});

CMS.registerWidget('categoria', CategoriaControl, CategoriaPreview);
