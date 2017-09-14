import React from "react";
import PropTypes from "prop-types";

const PondleTextPath = "M35.3 142.5c0 2.9-.5 5.5-1.4 7.8-.9 2.3-2.3 4.3-4.1 5.9-1.8 1.6-3.9 2.9-6.5 3.8-2.6.9-5.6 1.3-9.2 1.3H7.6V182c0 .2-.1.4-.2.6-.1.2-.3.3-.6.4-.3.1-.7.2-1.2.3-.5.1-1.1.1-1.8.1s-1.4 0-1.8-.1c-.5-.1-.9-.2-1.2-.3-.3-.1-.5-.2-.6-.4-.1-.2-.2-.4-.2-.6v-53.1c0-1.2.3-2 .9-2.5.6-.5 1.3-.8 2.1-.8h12.3c1.2 0 2.4.1 3.6.2 1.1.1 2.5.3 4 .7 1.6.3 3.1 1 4.8 1.9 1.6.9 3 2.1 4.1 3.4 1.1 1.4 2 2.9 2.6 4.7.6 1.9.9 3.8.9 6zm-8 .6c0-2.3-.4-4.3-1.3-5.9-.9-1.6-2-2.7-3.2-3.5-1.3-.8-2.6-1.3-4-1.5-1.4-.2-2.7-.3-4-.3H7.6V155h6.9c2.3 0 4.2-.3 5.8-.9 1.5-.6 2.8-1.4 3.8-2.5s1.8-2.3 2.4-3.8c.5-1.4.8-3 .8-4.7zM81.5 161.6c0 3.3-.4 6.3-1.3 9s-2.1 5.1-3.8 7.1c-1.7 2-3.8 3.5-6.4 4.6-2.6 1.1-5.5 1.7-8.9 1.7-3.3 0-6.2-.5-8.6-1.5s-4.5-2.4-6.1-4.3c-1.6-1.9-2.8-4.1-3.6-6.8s-1.2-5.7-1.2-9.1c0-3.3.4-6.3 1.3-9 .8-2.7 2.1-5.1 3.8-7.1 1.7-2 3.8-3.5 6.4-4.6 2.5-1.1 5.5-1.6 8.9-1.6 3.3 0 6.2.5 8.6 1.5 2.4 1 4.5 2.4 6.1 4.3 1.6 1.9 2.8 4.1 3.7 6.8.7 2.6 1.1 5.7 1.1 9zm-7.6.5c0-2.2-.2-4.2-.6-6.1-.4-1.9-1.1-3.6-2-5.1-.9-1.5-2.2-2.6-3.8-3.4-1.6-.8-3.6-1.3-5.9-1.3-2.2 0-4.1.4-5.6 1.2-1.6.8-2.9 1.9-3.9 3.3s-1.8 3.1-2.3 5c-.5 1.9-.7 4-.7 6.3 0 2.2.2 4.3.6 6.2.4 1.9 1.1 3.6 2 5s2.2 2.6 3.8 3.4c1.6.8 3.6 1.3 5.9 1.3 2.2 0 4-.4 5.6-1.2 1.6-.8 2.9-1.9 3.9-3.2 1-1.4 1.8-3.1 2.2-5 .6-2 .8-4.1.8-6.4zM126.8 182c0 .2-.1.4-.2.6-.1.2-.3.3-.6.4-.3.1-.6.2-1.1.3-.5.1-1.1.1-1.8.1s-1.3 0-1.8-.1-.8-.1-1.1-.3-.5-.3-.6-.4-.2-.4-.2-.6v-23.4c0-2.3-.2-4.1-.5-5.5-.4-1.4-.9-2.6-1.6-3.6-.7-1-1.6-1.8-2.6-2.3-1.1-.5-2.3-.8-3.8-.8-1.8 0-3.7.7-5.5 2-1.8 1.3-3.8 3.2-5.8 5.7V182c0 .2-.1.4-.2.6-.1.2-.3.3-.6.4-.3.1-.6.2-1.1.3-.5.1-1.1.1-1.8.1s-1.3 0-1.8-.1-.9-.1-1.1-.3-.5-.3-.6-.4c-.1-.2-.2-.4-.2-.6v-40c0-.2 0-.4.1-.6.1-.2.3-.3.5-.4.3-.1.6-.2 1-.3.4 0 1-.1 1.6-.1.7 0 1.2 0 1.6.1.4 0 .8.1 1 .3.2.1.4.3.5.4.1.2.2.4.2.6v5.3c2.3-2.5 4.5-4.4 6.7-5.5 2.2-1.2 4.5-1.8 6.8-1.8 2.7 0 4.9.5 6.7 1.4 1.8.9 3.3 2.1 4.4 3.6 1.1 1.5 1.9 3.3 2.4 5.3s.7 4.5.7 7.3V182zM174.4 182c0 .2-.1.4-.2.6-.1.2-.3.3-.5.4-.3.1-.6.2-1 .2-.4.1-.9.1-1.5.1s-1.1 0-1.6-.1c-.4-.1-.8-.1-1-.2s-.5-.2-.6-.4c-.1-.2-.2-.4-.2-.6v-5.3c-2.1 2.3-4.3 4.1-6.6 5.3-2.3 1.3-4.7 1.9-7.4 1.9-2.9 0-5.4-.6-7.5-1.7-2.1-1.1-3.8-2.7-5-4.6-1.3-1.9-2.2-4.2-2.8-6.8-.6-2.6-.9-5.4-.9-8.3 0-3.4.4-6.5 1.1-9.3.7-2.8 1.8-5.1 3.3-7.1s3.3-3.5 5.4-4.5c2.1-1.1 4.6-1.6 7.4-1.6 2.3 0 4.5.5 6.4 1.5 1.9 1 3.9 2.5 5.8 4.5v-23.2c0-.2.1-.4.2-.6.1-.2.3-.3.6-.4.3-.1.7-.2 1.1-.3.5-.1 1-.1 1.8-.1.7 0 1.3 0 1.8.1s.8.2 1.1.3c.3.1.5.3.6.4.1.2.2.4.2.6V182zm-7.4-28.1c-2-2.5-3.9-4.3-5.8-5.6-1.9-1.3-3.8-1.9-5.8-1.9-1.9 0-3.5.4-4.8 1.3s-2.4 2.1-3.2 3.5-1.4 3.1-1.8 4.9c-.4 1.8-.6 3.7-.6 5.6 0 2 .2 4 .5 5.9.3 1.9.9 3.6 1.6 5.1.8 1.5 1.8 2.7 3.1 3.6 1.3.9 2.9 1.4 4.8 1.4 1 0 1.9-.1 2.8-.4.9-.3 1.8-.7 2.8-1.3.9-.6 1.9-1.4 3-2.4 1-1 2.1-2.2 3.3-3.7v-16zM195.3 182c0 .2-.1.4-.2.6-.1.2-.3.3-.6.4-.3.1-.6.2-1.1.3-.5.1-1.1.1-1.8.1s-1.3 0-1.8-.1-.9-.1-1.1-.3-.5-.3-.6-.4c-.1-.2-.2-.4-.2-.6v-59.4c0-.2.1-.4.2-.6.1-.2.3-.3.6-.4.3-.1.7-.2 1.1-.3s1.1-.1 1.8-.1 1.3 0 1.8.1.8.1 1.1.3c.3.1.5.3.6.4.1.2.2.4.2.6V182zM243 160.3c0 1.2-.3 2-.9 2.5-.6.5-1.2.7-2 .7h-26.3c0 2.2.2 4.2.7 6s1.2 3.3 2.2 4.6c1 1.3 2.4 2.3 4.1 2.9 1.7.7 3.7 1 6.1 1 1.9 0 3.6-.2 5.1-.5 1.5-.3 2.8-.7 3.9-1 1.1-.4 2-.7 2.7-1 .7-.3 1.2-.5 1.6-.5.2 0 .4.1.6.2s.3.3.4.5c.1.2.2.5.2.9s.1.8.1 1.4v1c0 .3-.1.5-.1.8 0 .2-.1.4-.2.6-.1.2-.2.3-.4.5s-.6.4-1.4.8c-.8.4-1.8.7-3.1 1.1s-2.7.7-4.4 1-3.5.4-5.4.4c-3.3 0-6.2-.5-8.6-1.4-2.5-.9-4.6-2.3-6.2-4.1-1.7-1.8-3-4.1-3.8-6.8-.9-2.7-1.3-5.9-1.3-9.5 0-3.4.4-6.5 1.3-9.3s2.2-5.1 3.8-7c1.7-1.9 3.7-3.4 6.1-4.4 2.4-1 5-1.5 8-1.5 3.1 0 5.8.5 8 1.5s4 2.4 5.4 4.1c1.4 1.7 2.5 3.7 3.1 6 .7 2.3 1 4.7 1 7.4v1.1zm-7.4-2.2c.1-3.9-.8-6.9-2.6-9.1-1.8-2.2-4.5-3.3-8-3.3-1.8 0-3.4.3-4.8 1s-2.5 1.6-3.4 2.7c-.9 1.1-1.6 2.4-2.1 3.9s-.8 3.1-.8 4.7h21.7z"

const FlockTextPath = "M20.2 148.2c0 1.5-.2 2.8-.7 4-.5 1.2-1.2 2.3-2.1 3.1s-2.1 1.6-3.4 2.1c-1.3.5-2.9.7-4.8.7H5v12.1c0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.1 0-.3.1-.5.1H2.8c-.2 0-.4-.1-.5-.1-.1 0-.2-.1-.2-.2s-.1-.2-.1-.3v-29.6c0-.6.2-1 .5-1.2.3-.2.6-.3.9-.3h6.4c.6 0 1.3 0 1.9.1.6.1 1.3.2 2.1.4s1.6.5 2.5 1.1c.8.5 1.6 1.1 2.1 1.9.6.7 1 1.6 1.4 2.5.2.9.4 2 .4 3.1zm-3.2.3c0-1.4-.3-2.5-.8-3.5s-1.2-1.7-2-2.1c-.8-.5-1.6-.8-2.4-.9-.8-.1-1.6-.2-2.4-.2H5v13.7h4.3c1.4 0 2.5-.2 3.5-.5.9-.4 1.7-.8 2.3-1.5.6-.6 1.1-1.4 1.5-2.2.2-.9.4-1.8.4-2.8zM45.3 159c0 1.8-.2 3.4-.7 4.9-.5 1.5-1.1 2.8-2 3.9-.9 1.1-2 1.9-3.4 2.6-1.4.6-2.9.9-4.7.9-1.7 0-3.2-.3-4.5-.8-1.3-.5-2.4-1.3-3.2-2.3-.9-1-1.5-2.3-2-3.7-.4-1.4-.6-3.1-.6-4.9 0-1.8.2-3.4.7-4.9.4-1.5 1.1-2.8 2-3.8.9-1.1 2-1.9 3.4-2.5 1.4-.6 2.9-.9 4.7-.9 1.7 0 3.2.3 4.5.8s2.4 1.3 3.2 2.3c.9 1 1.5 2.3 2 3.7.4 1.2.6 2.9.6 4.7zm-3.1.2c0-1.3-.1-2.4-.4-3.6-.2-1.1-.7-2.1-1.2-3-.6-.9-1.3-1.6-2.3-2.1-1-.5-2.2-.8-3.6-.8-1.3 0-2.5.2-3.4.7-1 .5-1.7 1.1-2.4 2-.6.8-1.1 1.8-1.4 3-.3 1.1-.4 2.4-.4 3.7 0 1.3.1 2.5.4 3.6.2 1.1.7 2.2 1.2 3 .6.9 1.3 1.5 2.3 2.1 1 .5 2.2.8 3.6.8 1.3 0 2.5-.2 3.4-.7 1-.5 1.7-1.1 2.4-2s1.1-1.8 1.4-3c.3-1.1.4-2.3.4-3.7zM69.7 170.2c0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.1 0-.3.1-.4.1h-1.4c-.2 0-.3-.1-.4-.1-.1 0-.2-.1-.2-.2s-.1-.2-.1-.3v-13.1c0-1.4-.1-2.5-.3-3.3-.2-.9-.5-1.6-1-2.2-.4-.6-1-1.1-1.6-1.4-.7-.3-1.4-.5-2.3-.5-1.1 0-2.2.4-3.4 1.2-1.1.8-2.3 2-3.5 3.5v15.8c0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.1 0-.3.1-.4.1h-1.4c-.2 0-.3-.1-.5-.1-.1 0-.2-.1-.2-.2s-.1-.2-.1-.3v-22.1c0-.1 0-.2.1-.3 0-.1.1-.2.2-.2.1-.1.3-.1.4-.1H54c.2 0 .3.1.4.1.1.1.2.1.2.2s.1.2.1.3v3.1c1.3-1.4 2.5-2.4 3.7-3.1s2.4-1 3.6-1c1.4 0 2.7.2 3.7.7 1 .5 1.8 1.1 2.4 2 .6.8 1.1 1.8 1.3 2.9.3 1.1.4 2.4.4 4v13.5zM95.6 170.2c0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.1 0-.2.1-.4.1h-1.2c-.2 0-.3-.1-.4-.1-.1 0-.2-.1-.2-.2-.1-.1-.1-.2-.1-.3V167c-1.2 1.3-2.4 2.3-3.6 3-1.3.7-2.6 1.1-4.1 1.1-1.6 0-3-.3-4.1-.9s-2-1.5-2.7-2.5c-.7-1.1-1.2-2.3-1.5-3.7-.3-1.4-.5-2.9-.5-4.5 0-1.9.2-3.6.6-5.1.4-1.5 1-2.8 1.8-3.8.8-1.1 1.8-1.9 3-2.4 1.2-.6 2.5-.9 4.1-.9 1.3 0 2.6.3 3.7.9 1.1.6 2.2 1.5 3.3 2.6v-13.3c0-.1 0-.2.1-.3 0-.1.1-.1.2-.2.1 0 .3-.1.5-.1h1.4c.2 0 .3.1.4.1.1 0 .2.1.2.2s.1.2.1.3v32.7zm-2.9-15.9c-1.2-1.5-2.4-2.6-3.5-3.4-1.1-.8-2.3-1.2-3.6-1.2-1.1 0-2.1.3-2.9.8-.8.5-1.4 1.2-2 2.1-.5.9-.9 1.9-1.1 3-.2 1.1-.3 2.2-.3 3.4 0 1.2.1 2.4.3 3.6.2 1.2.5 2.2 1 3.1.5.9 1.1 1.6 1.9 2.2.8.5 1.8.8 2.9.8.6 0 1.2-.1 1.7-.2.6-.2 1.1-.4 1.7-.8.6-.4 1.2-.9 1.8-1.5.6-.6 1.3-1.3 2-2.2v-9.7zM106.7 170.2c0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.1 0-.3.1-.4.1h-1.4c-.2 0-.3-.1-.5-.1-.1 0-.2-.1-.2-.2s-.1-.2-.1-.3v-32.9c0-.1 0-.2.1-.3 0-.1.1-.2.2-.2.1-.1.3-.1.5-.1h1.4c.2 0 .3.1.4.1.1.1.2.1.2.2s.1.2.1.3v32.9zM132.8 158.1c0 .6-.2 1-.5 1.2-.3.2-.6.3-.9.3h-15.1c0 1.4.1 2.6.4 3.7.3 1.1.7 2.1 1.3 2.8.6.8 1.4 1.4 2.4 1.8 1 .4 2.2.6 3.7.6 1 0 1.9-.1 2.8-.3.8-.2 1.5-.4 2.1-.6.6-.2 1.1-.4 1.5-.6.4-.2.7-.3.8-.3.1 0 .2 0 .3.1.1 0 .1.1.2.2 0 .1.1.2.1.4V168.3c0 .1 0 .2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.2-.2.2-.1.1-.3.2-.8.4-.4.2-1 .4-1.7.6-.7.2-1.5.4-2.4.5-.9.2-1.9.2-2.9.2-1.7 0-3.2-.3-4.5-.8-1.3-.5-2.4-1.3-3.3-2.3-.9-1-1.6-2.2-2-3.7-.5-1.5-.7-3.2-.7-5.2 0-1.9.2-3.5.7-5 .5-1.5 1.2-2.7 2.1-3.8.9-1 2-1.8 3.2-2.4 1.3-.5 2.7-.8 4.2-.8 1.7 0 3.1.3 4.2.8 1.2.6 2.1 1.3 2.9 2.2.8.9 1.3 2 1.7 3.3.3 1.2.5 2.5.5 3.9v1.1zm-3-.9c0-2.3-.5-4.2-1.6-5.5s-2.8-2-4.9-2c-1.1 0-2.1.2-2.9.6-.8.4-1.5 1-2.1 1.6-.6.7-1 1.5-1.3 2.4-.3.9-.5 1.8-.5 2.8h13.3zM160.3 140.2v.5c0 .3-.1.5-.1.8-.1.3-.1.6-.2 1l-.3.9c-.1.3-.3.5-.4.7-.2.2-.4.3-.6.3h-10.3l-1.7 8.5h9.7c.2 0 .4.1.5.3.1.2.1.4.1.7v.5c0 .3-.1.5-.1.8-.1.3-.1.6-.2 1l-.3.9c-.1.3-.3.5-.4.7-.2.2-.4.3-.6.3h-9.6l-2.3 11.8c0 .2-.1.3-.2.5-.1.1-.3.2-.6.3-.3.1-.6.1-1 .2-.4 0-.9.1-1.6.1-.6 0-1.2 0-1.5-.1-.4 0-.7-.1-.9-.2-.2-.1-.4-.2-.5-.3-.1-.1-.1-.3 0-.5l5.7-28.7c.1-.7.4-1.2.9-1.5.4-.3.9-.5 1.5-.5h14.8c.3 0 .5.1.5.3-.4.1-.3.3-.3.7zM165.5 169.9c0 .2-.1.3-.2.4-.1.1-.3.2-.5.3-.2.1-.6.1-1 .2-.4 0-.9.1-1.5.1s-1.1 0-1.5-.1c-.4 0-.7-.1-.9-.2-.2-.1-.4-.2-.4-.3-.1-.1-.1-.3-.1-.4l6.4-32.1c0-.2.1-.3.2-.4.1-.1.3-.2.6-.3.3-.1.6-.2 1-.2s.9-.1 1.5-.1 1.1 0 1.5.1c.4 0 .7.1.9.2.2.1.3.2.4.3.1.1.1.3 0 .4l-6.4 32.1zM195.6 155.4c0 1.2-.1 2.4-.3 3.6-.2 1.2-.6 2.4-1 3.6-.5 1.2-1.1 2.3-1.8 3.3s-1.6 1.9-2.7 2.7c-1 .8-2.2 1.4-3.6 1.9-1.3.5-2.8.7-4.5.7-1.6 0-3.1-.2-4.3-.6-1.2-.4-2.2-.9-3-1.7-.8-.7-1.4-1.7-1.8-2.7-.4-1.1-.6-2.3-.6-3.7 0-1.2.1-2.4.3-3.6.2-1.2.6-2.4 1-3.6.5-1.2 1.1-2.3 1.8-3.3.7-1.1 1.6-2 2.7-2.7 1-.8 2.2-1.4 3.6-1.9 1.3-.5 2.8-.7 4.5-.7 1.6 0 3.1.2 4.3.6 1.2.4 2.2.9 3 1.7.8.7 1.4 1.7 1.8 2.7.5 1.1.6 2.3.6 3.7zm-6.3.5c0-.7-.1-1.3-.2-1.8s-.4-1-.7-1.3c-.3-.4-.7-.6-1.2-.8-.5-.2-1.1-.3-1.8-.3-.8 0-1.5.2-2.2.5-.7.3-1.2.7-1.7 1.3-.5.5-1 1.2-1.3 1.9-.4.7-.7 1.5-.9 2.2s-.4 1.6-.5 2.4c-.1.8-.2 1.6-.2 2.3 0 .7.1 1.3.2 1.8s.4 1 .7 1.4c.3.4.7.6 1.2.8.5.2 1.1.3 1.8.3.8 0 1.5-.2 2.2-.5.7-.3 1.2-.7 1.7-1.3.5-.5 1-1.2 1.3-1.9.4-.7.7-1.5.9-2.2.2-.8.4-1.6.5-2.4.1-.9.2-1.7.2-2.4zM218 149.6c0 .4 0 .8-.1 1.3s-.2.9-.4 1.3c-.1.4-.3.8-.5 1.1-.2.3-.5.4-.7.4-.2 0-.5-.1-.7-.3-.2-.2-.5-.4-.8-.7-.3-.2-.8-.5-1.3-.7-.5-.2-1.2-.3-2-.3s-1.6.2-2.3.6c-.7.4-1.2.9-1.7 1.5s-.9 1.3-1.2 2c-.3.8-.6 1.5-.8 2.3-.2.8-.4 1.5-.5 2.2-.1.7-.1 1.3-.1 1.8 0 1.3.3 2.3.9 3 .6.7 1.5 1 2.7 1 .9 0 1.7-.1 2.3-.4.7-.2 1.2-.5 1.7-.8.5-.3.9-.5 1.2-.8.3-.2.6-.3.9-.3.2 0 .3.1.4.2.1.1.1.4.1.6 0 .3 0 .6-.1 1s-.2.8-.3 1.3c-.1.4-.2.8-.4 1.2-.1.4-.3.7-.5.9-.2.2-.6.5-1 .7-.5.3-1 .5-1.6.7-.6.2-1.3.4-2 .5-.7.1-1.5.2-2.3.2-2.8 0-4.9-.7-6.3-2.1-1.4-1.4-2.1-3.5-2.1-6.2 0-1 .1-2.1.3-3.3.2-1.2.5-2.4.9-3.6.4-1.2 1-2.4 1.6-3.5.7-1.1 1.5-2.1 2.5-3 1-.9 2.1-1.6 3.4-2.1 1.3-.5 2.8-.8 4.4-.8.7 0 1.3 0 1.9.1.6.1 1.2.2 1.7.4s1 .4 1.4.6c.4.2.7.4.9.6.2.2.3.4.4.5 0 .5.1.6.1.9zM242.4 148c0 .3-.1.6-.3.9-.2.3-.6.8-1.1 1.3l-7.7 7.3 5 10.5c.2.4.3.7.3 1 .1.3.1.5.1.7 0 .2-.1.4-.2.5-.1.1-.3.3-.5.4-.3.1-.6.2-1 .2s-1 .1-1.6.1h-1.6c-.4 0-.7-.1-.9-.2-.2-.1-.4-.2-.5-.3-.1-.1-.2-.3-.2-.5l-5.2-11.5-2.3 11.5c0 .2-.1.3-.3.4-.1.1-.3.2-.6.3-.3.1-.6.1-1 .2-.4 0-.9.1-1.5.1s-1.1 0-1.5-.1c-.4 0-.7-.1-.9-.2-.2-.1-.4-.2-.4-.3-.1-.1-.1-.3-.1-.4l6.4-32.1c0-.2.1-.3.2-.4.1-.1.3-.2.6-.3.3-.1.6-.2 1-.2s.9-.1 1.5-.1 1.1 0 1.5.1c.4 0 .7.1.9.2.2.1.3.2.4.3.1.1.1.3 0 .4l-3.8 19.1 8.2-8.7c.2-.2.3-.4.5-.5.2-.1.4-.2.7-.3.3-.1.6-.1 1.1-.2h3c.4 0 .7.1 1 .2.2.1.4.2.5.3.2 0 .3.2.3.3z"

const Logo = (props) => {
  const { color, hideText, flock } = props;
  const viewBox = hideText ? "0 0 138.7 123.9" : "0 0 243 184";
  const textPath = flock ? FlockTextPath : PondleTextPath;

  const style = {
    fill: color || "currentColor",
  };

  if (hideText) return (
    <svg
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg" >
      <path d="M131.2 25.3c-5.9-4.4-11.4-8.8-13.9-12.3-2.5-3.4-5.1-11.4-13.2-12.7C96-.9 86.1.7 83.9 12.2c-2.2 11.5 5.3 14.3 6.2 21.5.9 7.2-5.6 8.4-13.1 8.1-7.5-.3-29-.3-43.3 10S0 46.7 0 46.7s-.8 31.1 31.6 47.8c9.1 4.6 17.3 6.9 24.5 7.8.2 3.6.5 10.7-.1 14.2-.9 4.8-1.2 7.5 5.6 7.5h28.3s2.2-.3 2.2-2.3c0-2-3.9-2.2-3.9-2.2s-20.2 2.2-24.5-8.7c0 0 .1-3.9.4-8 13.7-.2 21.9-5.3 21.9-5.3s24.9-10 34.5-29.9c9.6-19.9-4.2-31.1-4.2-31.1s-6.6-3.7-5-7.5c1.7-3.7 14.5 2.1 20.4 5 5.8 2.9 7.1-1.7 7.1-1.7s-1.6-2.7-7.6-7z"/>
    </svg>
  );

  return (
    <svg
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg" >
      <path d="M168.3 25.3c-5.9-4.4-11.4-8.8-13.9-12.3-2.5-3.4-5.1-11.4-13.2-12.7-8.1-1.2-18.1.3-20.2 11.8-2.2 11.5 5.3 14.3 6.2 21.5.9 7.2-5.6 8.4-13.1 8.1-7.5-.3-29-.3-43.3 10s-33.7-5.1-33.7-5.1-.8 31.1 31.6 47.8c9.1 4.6 17.3 6.9 24.5 7.8.2 3.6.5 10.7-.1 14.2-.9 4.8-1.2 7.5 5.6 7.5H127s2.2-.3 2.2-2.3c0-2-3.9-2.2-3.9-2.2s-20.2 2.2-24.5-8.7c0 0 .1-3.9.4-8 13.7-.2 21.9-5.3 21.9-5.3s24.9-10 34.5-29.9c9.6-19.9-4.2-31.1-4.2-31.1s-6.6-3.7-5-7.5c1.7-3.7 14.5 2.1 20.4 5 5.8 2.9 7.1-1.7 7.1-1.7s-1.7-2.6-7.6-6.9z" id="Graphic"/>
      <g id="Text">
        <path d={textPath} />
      </g>
    </svg>
  );
};

Logo.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  hideText: PropTypes.bool, // Add this property with value true for graphic only logo
  flock: PropTypes.bool, // Add this property for the PondleFlock version of the logo
};

export default Logo;
