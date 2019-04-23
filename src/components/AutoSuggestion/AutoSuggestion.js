import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SEO from '../seo';
import BasicImageCard from '../Card/BasicImageCard';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const pageStyles = {
  textCenter: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '95%',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  w100: {
    width: '100%',
    overflow: 'hidden'
  }
});
class AutoSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missionTitle: '',
      autoSuggestion: '',
      dueDate: new Date(),
      visibleDialog: false
    }
  }

  toggleDialog = () => {
    this.setState({
        visibleDialog: !this.state.visibleDialog
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.visibleDialog && 
          <Dialog
            open={this.state.visibleDialog}
            onClose={this.toggleDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Request Confirmed"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" style={{color: '#000'}}>
                {this.state.userMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.toggleDialog} color="secondary" autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        }
        <SEO title="Auto Suggestion" />
        <Grid container>
          <Grid item sm={12}>
            <h1 style={pageStyles.textCenter}>AUTO-SUGGESTION</h1>
            <Button variant="contained" color="primary" autoFocus>
              Add New
            </Button>
          </Grid>
          <Grid item sm={12}>
          <BasicImageCard></BasicImageCard>
            <ol>
            <li>
            Go into some quiet spot <strong>(preferably in bed at night)</strong> where you will not be disturbed or interrupted. 
            Close your eyes and repeat aloud <strong>(so you may hear your own words)</strong> 
            <ul>
            <li>the written statement of the amount of money you intend to accumulate,</li>
            <li>the time limit for its accumulation,</li>
            <li>and a description of the service or merchandise you intend to give in return for the money.</li>
            </ul>
            As you carry out these instructions, see yourself already in possession of the money. 
            For example: suppose you intend to accumulate $100,000 by the first of June 2019 and you intend to give personal services in return for the money in the capacity of a software developer. 
            Your written statement of your purpose is similar to the following: 
            <ul>
            <li>
            "By June 1st 2019 I have in my possession $100,000.00 in my ICCU checking account which comes to me in various amounts and forms, day by day. In return for this money,
            I give my best work as a software developer for the purpose of teaching and providing people with the tools to succeed in their goals and to have the self confidence to
            create software which changes lives! I have this money in my possession now! My trust in myself allows me to see this money before my eyes and touch it with my hands! 
            It is now awaiting transfer to me in retrun for the gifts I provide for developers and humanity! I am open and gratefully receive a plan by which to accumulate this money, 
            and I follow the plan I receive now!"
            </li>
            </ul>
            </li>
            <li>
            Repeat this program night and morning until you can see (in your imagination) the money you intend to create!
            </li>
            <li>
            Place a written copy of your statement where you can see it night and morning. Read it just before retiring and upon rising until it is memorized and part of your soul!
            </li>
            <li>
            Read the entire chapter aloud once every night until you become thoroughly convinced that the principle of AUTO-SUGGESTION is sound, that it will accomplish for you all that has been claimed for it. As you read, underline with a pencil every sentence that impresses you favorably!
            </li>
            </ol>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(AutoSuggestion);
