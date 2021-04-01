const messages = {
  0: 'damages skin moisture barrier and can cause irritation, redness, dry skin over time; use separately and sparingly.',

  1: 'may cause over-exfoliation, resulting in increased skin and sun sensitivity; separate products into day/night routines.',

  2: 'deactivates the efficacy of the other ingredient',

  3: 'renders the effects of both useless as benzoyl peroxide will oxidize vitamin C; use on alternative days'

};

const interactions = {
  'retinol': {
    'ascorbic acid' : `${messages['1']}`,

    'salicylic acid' : `${messages['0']}`,

    'glycolic acid' : `${messages['0']}`,

    'lactic acid' : `${messages['0']}`,

    'mandelic acid' : `${messages['0']}`,

    'Benzoyl Peroxide': `${messages['2']}`
  },

  'retinyl': {
    'ascorbic acid' : `${messages['1']}`,

    'salicylic acid' : `${messages['0']}`,

    'glycolic acid' : `${messages['0']}`,

    'lactic acid' : `${messages['0']}`,

    'mandelic acid' : `${messages['0']}`,

    'Benzoyl Peroxide': `${messages['2']}`
  },

  'ascorbic acid': {
    'retinol': `${messages['1']}`,

    'Benzoyl Peroxide': `${messages['3']}`,
  },


  'Benzoyl Peroxide': {
    'retinol' : `${messages['2']}`,

    'ascorbic acid': `${messages['3']}`,
  },

  'lactic acid' : {
    'retinol' : `${messages['0']}`,
  }
}

export default interactions;