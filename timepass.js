<select id='options'
        value={selectedValue} 
        onChange={(event) => setSelectedValue(event.target.value)}
        className="block appearance-none  border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline  "
      >
        {/* <option  value="">Select a map style</option> */}
        <option onChange={reloader}  value="mapbox://styles/mapbox/streets-v12">Streets</option>
        <option onChange={reloader}  value="mapbox://styles/mapbox/outdoors-v12">Outdoors</option>
        <option onChange={reloader}  value="mapbox://styles/mapbox/light-v11">Light</option>
        <option onChange={reloader}  value="mapbox://styles/mapbox/dark-v11">Dark</option>
        <option onChange={reloader}  value="mapbox://styles/mapbox/satellite-v9">Satellite</option>
        <option onChange={reloader}  value="mapbox://styles/mapbox/satellite-streets-v12">Satellite Streets</option>
        <option onChange={reloader}  value="mapbox://styles/mapbox/navigation-day-v1">Navigation Day</option>
        <option  onChange={reloader} value="mapbox://styles/mapbox/navigation-night-v1">Navigation Night</option>
      </select>