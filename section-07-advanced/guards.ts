type FileSource = {
  path: string;
};
const fileSource: FileSource = {
  path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  //Open or read file OR reach out to database server
  if ('path' in source) {
    //source.path is used to open the file
    return;
  }
  console.log(source.connectionUrl);
}

function isFile(source: Source) {
  return source === fileSource;
}