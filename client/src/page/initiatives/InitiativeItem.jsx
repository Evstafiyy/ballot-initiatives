import React from 'react'

function InitiativeItem({initiative, setInitiatives}) {
  return (
	<>
	<div key = {initiative.id}>
					Название: {initiative.title}
				</div>
	</>
  )
}

export default InitiativeItem