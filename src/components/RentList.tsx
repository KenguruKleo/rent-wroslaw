import * as React from 'react';
import RentItem from './RentItem';
import {getRemoteDoc} from '../services/remoteData'
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import { Grid } from '@mui/material';
import { isAvailable } from '../helpers';

type RentListProps = {
  showAll: boolean
}

export default function RentList(props: RentListProps) {
  const [, setDoc] = React.useState<GoogleSpreadsheet>()
  const [rows, setRows] = React.useState<GoogleSpreadsheetRow[]>([])

  React.useEffect(() => {
    getRemoteDoc().then(async (resDoc) => {
      setDoc(resDoc)
      const dataSheet = resDoc.sheetsByTitle['Data']
      const resRows = await dataSheet.getRows()
      setRows(resRows)
    })
  }, [])

  if (rows.length === 0) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  // for(const row of rows) {
  //   console.log(row)
  // }

  return (
    <Grid container gap={1}>
      {
        rows
          .filter(item => props.showAll || isAvailable(item['Status']))
          .map(item => (
            <RentItem item={item} key={item['Num']} />
          ))
      }
    </Grid>
  )
}