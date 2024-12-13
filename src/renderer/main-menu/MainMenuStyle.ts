const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
    fontFamily: 'InterBold',
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  baselineGroup: {
    display: 'flex',
    alignItems: 'baseline', // Ensures Typography elements align by their baseline
    width: '100%',
  },
  progressPercentage: {
    fontFamily: 'InterBold',
  },
  currentToDo: {
    fontFamily: 'InterBold',
    marginLeft: 'auto',
    marginRight: '15%',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    height: '50%',
  },
};

export default styles;