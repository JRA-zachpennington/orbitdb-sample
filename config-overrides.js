module.exports = function override(config, env) {
  console.log("override");
  let loaders = config.resolve;
  loaders.fallback = {
    tls: false,
    net: false,
    http: false, //require.resolve("stream-http"),
    https: false,
    zlib: false, //require.resolve("browserify-zlib"),
    path: false, //require.resolve("path-browserify"),
    util: require.resolve("util/"),
    crypto: require.resolve("crypto-browserify"),
    timers: false,
    child_process: false,
    assert: false,
    os: false,
    dgram: false,
    module: false,

    url: require.resolve("url"),
    fs: require.resolve("graceful-fs"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
  };

  return config;
};
