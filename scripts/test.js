Phaserfroot.PluginManager.register(
  "Test",
  class Test extends Phaserfroot.Component {
    constructor( target, instanceProperties ) {
      super( {
        name: "Test",
        owner: target,
      } );
      this.instanceProperties = instanceProperties;
      this.scene = target.scene;
      this.game = target.scene.game;

      this.owner.once( "levelSwitch", this.destroy, this );

      // Attach custom event listeners.
      this.owner.on( this.owner.EVENTS.LEVEL_START, this.onLevelStart2, this );


      // Initialize properties from parameters.


      // Boot phase.

      this.onCreate();

    }

    // BUILT-IN METHODS

    preUpdate () {

    }

    update () {

    }

    postUpdate () {

    }

    destroy () {
      this.owner.off( "levelSwitch", this.destroy, this );

      // Detach custom event listeners.
      if ( this.delayed_event ) this.delayed_event.remove();
      this.owner.removeListener( this.owner.EVENTS.LEVEL_START, this.onLevelStart2, this );
      if ( this.delayed_event2 ) this.delayed_event2.remove();

    }

    // CUSTOM METHODS

    onCreate () {
      // Executed when this script is initially created.
      this.set_text(  );
    }

    onLevelStart2() {
      this.set_text(  );
      this.delayed_event = this.scene.time.delayedCall( 2000, function() {
        if ( !this.owner || this.owner.exists === false ) {
          return;
        }
          this.update2(  );
      }, null, this );

    }

    set_text (  ) {
      if (this.game.GLOBAL_VARIABLES.hostPlayerID == this.game.GLOBAL_VARIABLES.myPlayerID) {
        this.owner.components.getByName( "TextAutomation" )[ 0 ].text = (['HostPlayerID: ',this.game.GLOBAL_VARIABLES.hostPlayerID,('' + '\n' +
        ''),'MyPlayerID: ',this.game.GLOBAL_VARIABLES.myPlayerID,('' + '\n' +
        ''),'Am I the Host? ','YES'].join(''));
      } else {
        this.owner.components.getByName( "TextAutomation" )[ 0 ].text = (['HostPlayerID: ',this.game.GLOBAL_VARIABLES.hostPlayerID,('' + '\n' +
        ''),'MyPlayerID: ',this.game.GLOBAL_VARIABLES.myPlayerID,('' + '\n' +
        ''),'Am I the Host? ','NO'].join(''));
      }
    }

    update2 (  ) {
      this.set_text(  );
      this.delayed_event2 = this.scene.time.delayedCall( 2000, function() {
        if ( !this.owner || this.owner.exists === false ) {
          return;
        }
          this.update2(  );
      }, null, this );
    }

  }
);