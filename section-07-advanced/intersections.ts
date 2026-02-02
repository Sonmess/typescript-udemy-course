type FileData = {
  path: string;
  content: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// or you can do this
interface AccessedIntFileData extends FileData, Status {}
interface AccessedIntDatabaseData extends DatabaseData, Status {}
