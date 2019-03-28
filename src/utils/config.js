const devConst = {
  baseUrl: 'development url',
  endPoints: 'end Points'
};

const prodConst = {
  baseUrl: "production url",
  endPoints: "end Points"
};

const constant = process.env.NODE_ENV === 'production' ? prodConst : devConst;
export default constant;