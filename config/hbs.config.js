const hbs = require("hbs");

hbs.registerPartials(__dirname + "/../views/partials");

hbs.registerHelper('markers', function(tasks) {
  const markers = tasks.reduce((markers, task) => {
    if (task.location?.coordinates) {
      const [lng, lat] = task.location?.coordinates;
      markers.push({ lng, lat, title: task.title })
    }
    return markers;
  }, []);
  return new hbs.SafeString(`<script>const gMarkers = ${JSON.stringify(markers)}</script>`);
})

hbs.registerHelper('hasLocation', function(task, options) {
  if (task.location?.coordinates) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
