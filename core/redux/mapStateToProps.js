// Default implementation
// Takes the whole state + extracts msg from intl
// for easier access
export default function mapStateToProps(state) {
  return {
    ...state,
    msg: state.intl.msg
  };
}
