var usingNode = typeof window === 'undefined';
var constants = {};

var FLUCTUATION_AMPLITUDE = 0.015;
var IDEAL_VOLUME = 45;

var COHESION_ATTR = 0.4;
var FOOD_ATTR = -6;
var OBSTACLE_REP = 10;

var FOOD_ATTR_DECAY = 1;
var COHESION_ATTR_DECAY = 0.2;
var OBSTACLE_ATTR_DECAY = 5;

var UNOCCUPIED = 0;
var OCCUPIED_FOOD = 1;
var OCCUPIED_OBSTACLE = 2;
var OCCUPIED_ORGANISM = 3;
var OCCUPIED_CONNECTED_FOOD = 4;

var VOLUME_WEIGHT = 0.002;
var YIELD_OFFSET = 0.1;

var DISPLAY_CANVAS_ID = "#display-canvas";
var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;
var SPACE_WIDTH = 5;
var SPACE_HEIGHT = 5;

var GRID_HORIZ_SPACES = CANVAS_WIDTH / SPACE_WIDTH;
var GRID_VERT_SPACES = CANVAS_HEIGHT / SPACE_HEIGHT;

if(usingNode)
{
    exports.FLUCTUATION_AMPLITUDE = FLUCTUATION_AMPLITUDE;
    exports.IDEAL_VOLUME = IDEAL_VOLUME;
    exports.COHESION_ATTR = COHESION_ATTR;
    exports.FOOD_ATTR = FOOD_ATTR;
    exports.OBSTACLE_REP = OBSTACLE_REP;
    exports.FOOD_ATTR_DECAY = FOOD_ATTR_DECAY;
    exports.COHESION_ATTR_DECAY = COHESION_ATTR_DECAY;
    exports.OBSTACLE_ATTR_DECAY = OBSTACLE_ATTR_DECAY;
    exports.UNOCCUPIED = UNOCCUPIED;
    exports.OCCUPIED_FOOD = OCCUPIED_FOOD;
    exports.OCCUPIED_OBSTACLE = OCCUPIED_OBSTACLE;
    exports.OCCUPIED_ORGANISM = OCCUPIED_ORGANISM;
    exports.OCCUPIED_CONNECTED_FOOD = OCCUPIED_CONNECTED_FOOD;
    exports.VOLUME_WEIGHT = VOLUME_WEIGHT;
    exports.YIELD_OFFSET = YIELD_OFFSET;
    exports.DISPLAY_CANVAS_ID = DISPLAY_CANVAS_ID;
    exports.CANVAS_WIDTH = CANVAS_WIDTH;
    exports.CANVAS_HEIGHT = CANVAS_HEIGHT;
    exports.SPACE_WIDTH = SPACE_WIDTH;
    exports.SPACE_HEIGHT = SPACE_HEIGHT;
    exports.GRID_HORIZ_SPACES = GRID_HORIZ_SPACES;
    exports.GRID_VERT_SPACES = GRID_VERT_SPACES;
}
else
{
    constants.FLUCTUATION_AMPLITUDE = FLUCTUATION_AMPLITUDE;
    constants.IDEAL_VOLUME = IDEAL_VOLUME;
    constants.COHESION_ATTR = COHESION_ATTR;
    constants.FOOD_ATTR = FOOD_ATTR;
    constants.OBSTACLE_REP = OBSTACLE_REP;
    constants.FOOD_ATTR_DECAY = FOOD_ATTR_DECAY;
    constants.COHESION_ATTR_DECAY = COHESION_ATTR_DECAY;
    constants.OBSTACLE_ATTR_DECAY = OBSTACLE_ATTR_DECAY;
    constants.UNOCCUPIED = UNOCCUPIED;
    constants.OCCUPIED_FOOD = OCCUPIED_FOOD;
    constants.OCCUPIED_OBSTACLE = OCCUPIED_OBSTACLE;
    constants.OCCUPIED_ORGANISM = OCCUPIED_ORGANISM;
    constants.OCCUPIED_CONNECTED_FOOD = OCCUPIED_CONNECTED_FOOD;
    constants.VOLUME_WEIGHT = VOLUME_WEIGHT;
    constants.YIELD_OFFSET = YIELD_OFFSET;
    constants.DISPLAY_CANVAS_ID = DISPLAY_CANVAS_ID;
    constants.CANVAS_WIDTH = CANVAS_WIDTH;
    constants.CANVAS_HEIGHT = CANVAS_HEIGHT;
    constants.SPACE_WIDTH = SPACE_WIDTH;
    constants.SPACE_HEIGHT = SPACE_HEIGHT;
    constants.GRID_HORIZ_SPACES = GRID_HORIZ_SPACES;
    constants.GRID_VERT_SPACES = GRID_VERT_SPACES;
}