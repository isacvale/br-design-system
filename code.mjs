import raven from '/node_modules/@dvo/raven/raven.mjs'
import celo from '/node_modules/celo/celo.mjs'

    const state = {}

    window.raven = raven
    raven.load(state)

    window.onload = () => {

      // Get the table
      const tables = document.querySelectorAll('.hero-table')

      // Define columns
      const cellP = x => {
        const el = document.createElement('strong')
        el.textContent = x
        return el
      }
      const cellBtn = (x, record) => {
        const el = document.createElement('button')
        el.setAttribute('type', 'button')
        el.innerText = x
        el.addEventListener('click',() => alert('wow:'+x+record.name+record.rank))
        return el
      }
      const columns = [
        {
          name: 'rank',
          label: 'Rank',
          // function: cellP
        },
        {
          name: 'name',
          label: 'Name',
          function: cellP
        },
        {
          name: 'power',
          label: 'Power',
          // function: cellP
        },
        {
          name: 'vanquished',
          label: 'Alert!',
          function: cellBtn
        },
      ]

      // Define rows
      const rows = [
        {
          name: 'Achilles',
          origin: 'Greece',
          power: 'Invulnerable (mostly)',
          vanquished: 'Hector',
          defeatedBY: 'Paris',
          rank: 1
        },
        {
          name: 'Hercules',
          origin: 'Greece',
          power: 'Strength',
          vanquished: 'Nemean Lion',
          defeatedBY: 'Nessus',
          rank: 2
        },
        {
          name: 'Jason',
          origin: 'Greece',
          power: 'Leadership',
          vanquished: 'Harpies',
          defeatedBY: 'Nessus',
          rank: 3
        },
        {
          name: 'Odysseus',
          origin: 'Greece',
          power: 'Intelligence',
          vanquished: 'Troy',
          defeatedBY: 'Telegonos',
          rank: 4
        },
        {
          name: 'Perseus',
          origin: 'Greece',
          power: 'Bravery',
          vanquished: 'Medusa',
          defeatedBY: 'Megapenthes',
          rank: 5
        },
      ]

      tables.forEach( table => {
        console.log('table:', table)
        table.setColumns(columns)
        table.setRows(rows)
      })
    }