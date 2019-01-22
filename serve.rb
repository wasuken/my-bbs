require './mybbs'

module MySpace
  MyBBS.run! host: CONFIG['host'], port: CONFIG['port'].to_i, bind: CONFIG['bind']
end
