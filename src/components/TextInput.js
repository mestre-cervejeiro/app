import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const TextInput = withStyles({
	root: {
		'& fieldset': {
			borderRadius: 25,
			backgroundColor: 'white'
		},

		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '  #a05344 '
		}
	}
})(TextField);

export default TextInput;
