import Route from '@ember/routing/route';

export default class ApplicationIndexRoute extends Route {
  beforeModel() {
    this.transitionTo('overview');
  }
}
