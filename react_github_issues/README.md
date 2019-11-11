# Using Github API within a React App

## Date: 11/11/19 W12 D1 D53

### Summary

This repo contains the react_github_issues folder which is a small project spun up with create-react-app. I'm using the github api to access issues data from the create-react-app repository and displaying that information.

The pattern I'm noticing within class components is writing a function that gets data from a resource and then including that function within componentDidMount. Then this.setState is run to update the state of the component with the data that is returned which then triggers the re-render. Then you have the ability to reference the state of the component and pass that into child components as props which the child components can then use to render their content.

Functional components don't store state but I think React Hooks enable some of that behavior. I haven't looked too much into React Hooks just yet as I'm trying to get a handle on the basics. Functional components simply display some type of content and don't need to track a state in order to re-render.
